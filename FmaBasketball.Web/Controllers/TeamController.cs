using System;
using System.Web.Http;
using Fma.Core.Extensions;
using FmaBasketball.Data;
using FmaBasketball.Data.Models;
using FmaBasketball.Web.Models;

namespace FmaBasketball.Web.Controllers
{
    public class TeamController : ApiController
    {
        private readonly FmaBasketballDbContext _dbContext;

        public TeamController(FmaBasketballDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        [HttpPost]
        public IHttpActionResult Post(RegisterTeamViewModel viewModel)
        {
            try
            {
                var team = viewModel.MapTo(new Team());
                _dbContext.Teams.Add(team);
                _dbContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
