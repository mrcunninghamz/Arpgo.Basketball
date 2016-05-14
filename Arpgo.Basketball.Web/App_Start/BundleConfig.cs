using System.Web.Optimization;

namespace Arpgo.Basketball.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/app").Include(
                        "~/Scripts/vendors/jquery/jquery-{version}.js",
                        //"~/Scripts/jquery.validate*",
                      "~/Scripts/vendors/bootstrap/bootstrap.js",
                      "~/Scripts/vendors/angular/angular.js",
                      "~/Scripts/vendors/angular/angular-route.js",
                      "~/Scripts/vendors/angular/angular-resource.js",
                      "~/Scripts/vendors/angular/angular-sanitize.js",
                      "~/Scripts/vendors/angular-ui/ui-bootstrap-tpls.js",
                      "~/Scripts/vendors/angular-ui/showErrors.js",
                      "~/Scripts/vendors/angular-ui/angular-ui-router.js",
                      "~/Scripts/app/services/*.js",
                      "~/Scripts/app/directives/*.js",
                      "~/Scripts/app/models/*.js",
                      "~/Scripts/app/controllers/*.js",
                      "~/Scripts/app/BasketballApp.js",
                      "~/Scripts/app/Main.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                    "~/Scripts/vendors/jquery/jquery-{version}.js",
                      "~/Scripts/vendors/jquery/jquery.validate*",
                      "~/Scripts/vendors/bootstrap/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
