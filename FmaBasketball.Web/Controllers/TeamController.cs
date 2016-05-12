using System;
using System.Threading.Tasks;
using System.Web.Http;
using Fma.Core.Entity;
using Fma.Core.Extensions;
using FmaBasketball.Data;
using FmaBasketball.Data.Models;
using FmaBasketball.Web.Models;
using FmaBasketball.Web.Models.Constants;
using Microsoft.AspNet.Identity;

namespace FmaBasketball.Web.Controllers
{
    public class TeamController : ApiController
    {
        private readonly FmaBasketballDbContext _dbContext;
        private readonly ApplicationUserManager _userManager;

        public TeamController(FmaBasketballDbContext dbContext, ApplicationUserManager userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
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

                    var team = viewModel.MapTo(new Team());
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
