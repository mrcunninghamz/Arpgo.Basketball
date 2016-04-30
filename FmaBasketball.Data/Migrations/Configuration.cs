using System.Linq.Expressions;
using FmaBasketball.Data.Models;

namespace FmaBasketball.Data.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<FmaBasketballDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FmaBasketballDbContext context)
        {
            context.Reasons.AddOrUpdate(
                    x => x.Name,
                    new Reason { Id = 1, Name = "Top 8"},
                    new Reason { Id = 2, Name = "Out of state" },
                    new Reason { Id = 3, Name = "New" },
                    new Reason { Id = 4, Name = "Recreational" },
                    new Reason { Id = 5, Name = "Other" }
                );
            context.DocumentTypes.AddOrUpdate(
                    x => x.Name,
                    new DocumentType { Id = 1, Name = "Photo Id" },
                    new DocumentType { Id = 2, Name = "Birth Certificate" },
                    new DocumentType { Id = 3, Name = "Marriage Certificate" },
                    new DocumentType { Id = 4, Name = "Adoption Papers" }
                );
            context.Divisions.AddOrUpdate(
                    x => x.Name,
                    new Division { Id = 1, Name = "A" },
                    new Division { Id = 2, Name = "B" }
                );
        }
    }
}
