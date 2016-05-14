using System.Web.Mvc;

namespace Arpgo.Basketball.Web.Areas.Team
{
    public class TeamAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Team";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Team_default",
                "Team/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "AngularTemplates", 
                "Team/templates/{name}",
                new { controller = "AngularTemplates", action = "Template" }
            );
        }
    }
}