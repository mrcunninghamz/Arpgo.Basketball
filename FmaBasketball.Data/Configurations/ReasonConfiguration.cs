using System.ComponentModel.Composition;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using Fma.Core.Entity;
using FmaBasketball.Data.Models;

namespace FmaBasketball.Data.Configurations
{
    [Export(typeof(IEntityConfiguration))]
    public class ReasonConfiguration : EntityTypeConfiguration<Reason>, IEntityConfiguration
    {
        public ReasonConfiguration()
        {
            ToTable("Reasons");

            HasMany(d => d.Teams).WithRequired(t => t.Reason);
        }

        public void AddConfiguration(ConfigurationRegistrar registrar)
        {
            registrar.Add(this);
        }
    }
}