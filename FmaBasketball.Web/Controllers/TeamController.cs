using System;
using System.Threading.Tasks;
using System.Web.Http;
using Fma.Core.Entity;
using Fma.Core.Extensions;
using FmaBasketball.Data;
using FmaBasketball.Data.Models;
using FmaBasketball.Web.Models;

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

                var response = await _userManager.CreateAsync(user);

                if (response.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user.Id, "Team Sponsor"); //TODO: put this role name in a constants file

                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user.Id);
                    var callbackUrl = Url.Link("Default", new { Controller = "Account", Action = "ConfirmEmailAndSetPassword", userId = user.Id, code });
                    await _userManager.SendEmailAsync(user.Id, "Team registration and next steps!", $"Hi! Finish registering your team, {viewModel.Name}, by clicking <a href=\"{callbackUrl}\">here</a>.");
                    

                    var team = viewModel.MapTo(new Team());
                    team.AspNetUser_Id = user.Id;

                    _dbContext.Teams.Add(team);
                    _dbContext.SaveChanges();
                }
                else
                {
                    var errors = string.Join(",", response.Errors);
                    throw new Exception($"Membership error, user not created:{user.Email} with errors {errors}");
                }
                

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
