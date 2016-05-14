using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace Arpgo.Basketball.Web.Areas.Team.Controllers
{
    public class AngularTemplatesController : Controller
    {
        [ChildActionOnly]
        public ActionResult Inline()
        {
            IEnumerable<string> templateNames = Directory
                .GetFiles(Server.MapPath("~/Areas/Team/Views/AngularTemplates/Templates/"))
                .Select(Path.GetFileNameWithoutExtension);

            return View(templateNames);
        }

        public ActionResult Template(string name)
        {
            if (name == null || !Regex.IsMatch(name, @"^[-\w]+$"))
                throw new ArgumentException("Illegal template name", "name");

            string relativeViewPath = string.Format("~/Areas/Team/Views/AngularTemplates/Templates/{0}.cshtml", name);

            return PartialView(relativeViewPath);
        }
    }
}