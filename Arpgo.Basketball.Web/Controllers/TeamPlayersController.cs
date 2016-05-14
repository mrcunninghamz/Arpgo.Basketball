using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Arpgo.Basketball.Data;
using Arpgo.Basketball.Data.Models;
using Arpgo.Basketball.Web.Areas.Team.Models;
using AutoMapper;
using Microsoft.AspNet.Identity;

namespace Arpgo.Basketball.Web.Controllers
{
    public class TeamPlayersController : ApiController
    {
        private readonly BasketballDbContext _dbContext;
        private readonly ApplicationUserManager _userManager;
        private readonly IMapper _mapper;

        public TeamPlayersController(BasketballDbContext dbContext, ApplicationUserManager userManager, IMapper mapper)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _mapper = mapper;
            _dbContext = dbContext;
            _userManager = userManager;
            _mapper = mapper;
        }

        
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                var username = HttpContext.Current.User.Identity.GetUserName();
                var players = _dbContext.Teams.First(x => x.User.UserName.Equals(username)).Players;
                var model = _mapper.Map<IEnumerable<Player>, IEnumerable<TeamViewModel>>(players);

                return Ok(new ApiResponse<IEnumerable<TeamViewModel>>(model));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}