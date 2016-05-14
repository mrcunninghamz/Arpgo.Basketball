using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Arpgo.Basketball.Data.Enums;
using Arpgo.Basketball.Web.Models;
using Arpgo.Core.Enums;
using Arpgo.Core.Extensions;

namespace Arpgo.Basketball.Web.Controllers
{
    public class UtilityController : ApiController
    {
        [System.Web.Http.HttpGet]
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