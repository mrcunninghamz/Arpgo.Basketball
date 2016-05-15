using System.Data.Entity.Migrations;
using Arpgo.Basketball.Data.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Arpgo.Basketball.Data.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<BasketballDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(BasketballDbContext context)
        {
            context.Reasons.AddOrUpdate(
                    x => x.Id,
                    new Reason { Id = 1, Name = "Top 8"},
                    new Reason { Id = 2, Name = "Out of state" },
                    new Reason { Id = 3, Name = "New" },
                    new Reason { Id = 4, Name = "Recreational" },
                    new Reason { Id = 5, Name = "Other" }
                );
            context.DocumentTypes.AddOrUpdate(
                    x => x.Id,
                    new DocumentType { Id = 1, Name = "Photo Id" },
                    new DocumentType { Id = 2, Name = "Birth Certificate" },
                    new DocumentType { Id = 3, Name = "Marriage Certificate" },
                    new DocumentType { Id = 4, Name = "Adoption Papers" }
                );
            context.Divisions.AddOrUpdate(
                    x => x.Id,
                    new Division { Id = 1, Name = "A" },
                    new Division { Id = 2, Name = "B" }
                );
            context.Roles.AddOrUpdate(
                    x => x.Id,
                    new IdentityRole { Id = "cd9d9a9f-9acb-4761-b52e-e4784f3a978b", Name = "Admin" },
                    new IdentityRole { Id = "b04c0862-f48e-4d30-ac29-727b911c9a63", Name = "Team Sponsor" },
                    new IdentityRole { Id = "9099fd10-2f4c-4d13-bff0-5add508076ca", Name = "Player" }
                );
        }
    }
}
