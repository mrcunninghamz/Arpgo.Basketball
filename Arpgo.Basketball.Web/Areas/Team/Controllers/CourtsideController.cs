using System.Web.Mvc;

namespace Arpgo.Basketball.Web.Areas.Team.Controllers
{
    [Authorize]
    public class CourtsideController : Controller
    {
        // GET: Team/Courtside
        public ActionResult Index()
        {
            return View();
        }
    }
}