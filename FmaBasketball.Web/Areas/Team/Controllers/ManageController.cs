using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FmaBasketball.Web.Areas.Team.Controllers
{
    public class ManageController : Controller
    {
        // GET: Team/Manage
        public ActionResult Index()
        {
            return View();
        }
    }
}