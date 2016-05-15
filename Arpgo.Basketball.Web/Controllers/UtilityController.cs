using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Arpgo.Basketball.Data;
using Arpgo.Basketball.Data.Enums;
using Arpgo.Basketball.Web.Areas.Team.Models;
using Arpgo.Basketball.Web.Models;
using Arpgo.Core.Enums;
using Arpgo.Core.Extensions;

namespace Arpgo.Basketball.Web.Controllers
{
    public class UtilityController : ApiController
    {
        private readonly BasketballDbContext _dbContext;
        private readonly ApplicationUserManager _userManager;

        public UtilityController(BasketballDbContext dbContext, ApplicationUserManager userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        [HttpGet]
        public IHttpActionResult GetType(string type)
        {
            List<EnumAttributes> enumAttributes;

            var responseObject = new List<AngularSelectItemViewModel>();

            switch (type)
            {
                case "Divisions":
                    enumAttributes = SelectExtensions.ToEnumAttributes(typeof(DivisionType), null);
                    responseObject = CreateAngularSelectItemList(enumAttributes);
                    break;
                case "Reasons":
                    enumAttributes = SelectExtensions.ToEnumAttributes(typeof(ReasonType), null);
                    responseObject = CreateAngularSelectItemList(enumAttributes);
                    break;
                case "AReasons":
                    enumAttributes = SelectExtensions.ToEnumAttributes(typeof(AReasonsType), null);
                    responseObject = CreateAngularSelectItemList(enumAttributes);
                    break;
                case "BReasons":
                    enumAttributes = SelectExtensions.ToEnumAttributes(typeof(BReasonsType), null);
                    responseObject = CreateAngularSelectItemList(enumAttributes);
                    break;
                case "States":
                    enumAttributes = SelectExtensions.ToEnumAttributes(typeof(StatesAndCountriesType), null);
                    responseObject = CreateAngularSelectItemListForStates(enumAttributes);
                    break;
                
            }

            return Ok(new AngularResponse<List<AngularSelectItemViewModel>>(responseObject));
        }

        [HttpGet]
        public IHttpActionResult UserNameAvailable(string email)
        {
            var exists = _userManager.Users.Any(x => x.UserName.Equals(email));

            return Ok(new ApiResponse<bool>(!exists));
        }

        [HttpGet]
        public IHttpActionResult PlayerNumberAvailable(string number, int teamId)
        {
            var exists = _dbContext.Teams.Any(x => x.Id == teamId && x.Players.Any(p => p.Number.Equals(number)));

            return Ok(new ApiResponse<bool>(!exists));
        }

        private List<AngularSelectItemViewModel> CreateAngularSelectItemList(List<EnumAttributes> enumAttributes)
        {
            return enumAttributes.Select(x => new AngularSelectItemViewModel {Id = x.Value, Label = x.Description}).ToList();
        }

        private List<AngularSelectItemViewModel> CreateAngularSelectItemListForStates(List<EnumAttributes> enumAttributes)
        {
            return enumAttributes.Select(x => new AngularSelectItemViewModel { Id = x.StringValue, Label = x.Description }).ToList();
        }

    }
}