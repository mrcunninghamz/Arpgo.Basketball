using System.Web;
using System.Web.Optimization;

namespace FmaBasketball.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/app").Include(
                        "~/Scripts/jquery-{version}.js",
                        //"~/Scripts/jquery.validate*",
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-route.js",
                      "~/Scripts/angular-resource.js",
                      "~/Scripts/angular-sanitize.js",
                      "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                      "~/Scripts/angular-ui/showErrors.js",
                      "~/Scripts/app/controllers/*.js",
                      "~/Scripts/app/models/*.js",
                      "~/Scripts/app/BasketballApp.js",
                      "~/Scripts/Main.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
