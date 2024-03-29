﻿using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Arpgo.Basketball.Data;
using Arpgo.Basketball.Web;
using Arpgo.Core.Entity;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataProtection;
using Owin;

[assembly: OwinStartup(typeof(Startup))]
namespace Arpgo.Basketball.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;

            // REGISTER DEPENDENCIES
            builder.RegisterType<BasketballDbContext>().AsSelf().InstancePerRequest();
            builder.RegisterType<ApplicationUserStore>().As<IUserStore<ApplicationUser>>().InstancePerRequest();
            builder.RegisterType<ApplicationUserManager>().AsSelf().InstancePerRequest();
            builder.RegisterType<ApplicationSignInManager>().AsSelf().InstancePerRequest();
            builder.Register<IAuthenticationManager>(c => HttpContext.Current.GetOwinContext().Authentication).InstancePerRequest();
            builder.Register<IDataProtectionProvider>(c => app.GetDataProtectionProvider()).InstancePerRequest();

            // REGISTER CONTROLLERS SO DEPENDENCIES ARE CONSTRUCTOR INJECTED
            builder.RegisterControllers(Assembly.GetExecutingAssembly());
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterModule(new AutoMapperModule());

            // BUILD THE CONTAINER
            var container = builder.Build();

            // REPLACE THE MVC DEPENDENCY RESOLVER WITH AUTOFAC
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));


            // REGISTER WITH OWIN
            app.UseAutofacMiddleware(container);
            app.UseAutofacWebApi(config);
            app.UseAutofacMvc();


            ConfigureAuth(app);
        }
    }
}
