using System.Web.Mvc;
using Arpgo.Basketball.Web.Models.Constants;

namespace Arpgo.Basketball.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (User.IsInRole(Roles.TeamSponsor) || User.IsInRole(Roles.Player))
            {
                return RedirectToAction("Index", "Courtside", new { area = "Team" });
            }
            return View();
        }
    }
}