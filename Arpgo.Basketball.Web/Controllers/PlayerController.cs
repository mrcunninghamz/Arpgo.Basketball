using System;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Arpgo.Basketball.Data;
using Arpgo.Basketball.Data.Enums;
using Arpgo.Basketball.Data.Models;
using Arpgo.Basketball.Web.Areas.Team.Models;
using Arpgo.Basketball.Web.Models.Constants;
using Arpgo.Core.Entity;
using AutoMapper;
using Microsoft.AspNet.Identity;

namespace Arpgo.Basketball.Web.Controllers
{
    public class PlayerController : ApiController
    {
        private readonly BasketballDbContext _dbContext;
        private readonly ApplicationUserManager _userManager;
        private readonly IMapper _mapper;

        public PlayerController(BasketballDbContext dbContext, ApplicationUserManager userManager, IMapper mapper)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Authorize]
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(new ApiResponse<PlayerViewModel>(new PlayerViewModel()));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        [Authorize]
        public IHttpActionResult Get(int id)
        {
            try
            {
                var player = _dbContext.Players.First(x => x.Id == id);
                var model = _mapper.Map<Player, GetPlayerViewModel>(player);

                return Ok(new ApiResponse<GetPlayerViewModel>(model));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> Put(ApiRequest<PlayerViewModel> viewModel)
        {
            try
            {
                var teamName = _dbContext.Teams.First(x => x.Id == viewModel.Data.Team_Id).Name;
                var player = _mapper.Map<PlayerViewModel, Player>(viewModel.Data);

                var user = new ApplicationUser
                {
                    Email = viewModel.Data.Email,
                    UserName = viewModel.Data.Email
                };

                var response = await _userManager.CreateAsync(user);

                if (response.Succeeded)
                {
                    //Add player to role
                    var roleResponse = await _userManager.AddToRoleAsync(user.Id, Roles.Player);
                    if (!roleResponse.Succeeded) { ThrowIdentityResponseError(response, user.Email); }
                    
                    //send player email
                    await SendPlayerEmailAsync(user.Id, teamName, viewModel.Data.FirstName);
                    
                    //update player status
                    player.Status = (int)PlayerStatus.EmailSent;
                    player.AspNetUser_Id = user.Id;

                    _dbContext.Players.Add(player);
                    _dbContext.SaveChanges();
                }
                else
                {
                    ThrowIdentityResponseError(response, user.Email);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpDelete]
        [Authorize]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                var player = _dbContext.Players.FirstOrDefault(x => x.Id == id && x.AspNetUser_Id == null);
                if (player != null)
                {
                    _dbContext.Players.Remove(player);
                }
                else
                {
                    player = _dbContext.Players.First(x => x.Id == id);
                    player.Team_Id = null;
                    player.Status = (int)PlayerStatus.FreeAgent;
                    _dbContext.Players.AddOrUpdate(player);
                }

                _dbContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        private static void ThrowIdentityResponseError(IdentityResult response, string username)
        {
            var errors = string.Join(",", response.Errors);
            throw new Exception($"Membership error, user not created:{username} with errors {errors}");
        }

        private async Task SendPlayerEmailAsync(string userId, string teamName, string playerName)
        {
            var code = await _userManager.GeneratePasswordResetTokenAsync(userId);
            var callbackUrl = Url.Link("Default", new { Controller = "Account", Action = "ResetPassword", userId, code });
            await _userManager.SendEmailAsync(userId, $"Player registration for team: {teamName}", $"Hi {playerName}! You have been drafted by the team {teamName}, join your team by clicking <a href=\"{callbackUrl}\">here</a>.");
        }
    }
}