using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Arpgo.Basketball.Data;
using Arpgo.Basketball.Data.Models;
using Arpgo.Basketball.Web.Areas.Team.Models;
using Arpgo.Basketball.Web.Models.Constants;
using Arpgo.Core.Entity;
using AutoMapper;
using Microsoft.AspNet.Identity;

namespace Arpgo.Basketball.Web.Controllers
{
    public class TeamController : ApiController
    {
        private readonly BasketballDbContext _dbContext;
        private readonly ApplicationUserManager _userManager;
        private readonly IMapper _mapper;

        public TeamController(BasketballDbContext dbContext, ApplicationUserManager userManager, IMapper mapper)
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
                var username = HttpContext.Current.User.Identity.GetUserName();
                var team = _dbContext.Teams.First(x => x.User.UserName.Equals(username));

                var model = _mapper.Map<Team,TeamViewModel>(team);

                return Ok(model);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        public async Task<IHttpActionResult> Post(RegisterTeamViewModel viewModel)
        {
            try
            {
                var user = new ApplicationUser
                {
                    Email = viewModel.Email,
                    UserName = viewModel.Email,
                    PhoneNumber = viewModel.HomePhoneNumber
                };

                var response = await _userManager.CreateAsync(user, viewModel.Password);

                if (response.Succeeded)
                {
                    var roleResponse = await _userManager.AddToRoleAsync(user.Id, Roles.TeamSponsor);
                    if (!roleResponse.Succeeded) { ThrowIdentityResponseError(response, user.Email); }

                    await SendTeamSponsorEmailAsync(user.Id, viewModel.Name);

                    var team = _mapper.Map<RegisterTeamViewModel, Team>(viewModel);
                    team.AspNetUser_Id = user.Id;

                    _dbContext.Teams.Add(team);
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

        private static void ThrowIdentityResponseError(IdentityResult response, string username) 
        {
            var errors = string.Join(",", response.Errors);
            throw new Exception($"Membership error, user not created:{username} with errors {errors}");
        }

        private async Task SendTeamSponsorEmailAsync(string userId, string teamName)
        {
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(userId);
            var callbackUrl = Url.Link("Default", new { Controller = "Account", Action = "ConfirmEmail", userId = userId, code });
            await _userManager.SendEmailAsync(userId, "Team registration and next steps!", $"Hi! Finish registering your team, {teamName}, by clicking <a href=\"{callbackUrl}\">here</a>.");
        }
    }
}
