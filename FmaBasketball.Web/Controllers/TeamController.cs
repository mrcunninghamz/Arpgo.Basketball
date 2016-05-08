using System.Collections.Generic;
using System.Web.Http;
using System.Web.Mvc;
using Fma.Core.Extensions;
using FmaBasketball.Data;
using FmaBasketball.Data.Enums;
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

        [System.Web.Http.HttpGet]
        public IHttpActionResult GetDivisions(string type)
        {
            SelectList selectList;

            switch (type)
            {
                case "Divisions":
                    selectList = SelectExtensions.ToSelectList(typeof(DivisionType), null);
                    break;
                case "Reasons":
                    selectList = SelectExtensions.ToSelectList(typeof(ReasonType), null);
                    break;
                case "AReasons":
                    selectList = SelectExtensions.ToSelectList(typeof(AReasonsType), null);
                    break;
                case "BReasons":
                    selectList = SelectExtensions.ToSelectList(typeof(BReasonsType), null);
                    break;
                default:
                    selectList = new SelectList(null);
                    break;

            }
            
            var responseObject = new List<AngularMultiSelectViewModel>();
            foreach (SelectListItem item in selectList.Items)
            {
                responseObject.Add(new AngularMultiSelectViewModel {Id = int.Parse(item.Value), Label = item.Text});

            }

            return Ok(new { Data = responseObject });
        }

        [System.Web.Http.HttpPost]
        public IHttpActionResult Register(RegisterTeamViewModel viewModel)
        {
            return Ok();
        }
    }
}
