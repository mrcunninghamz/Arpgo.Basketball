using System.ComponentModel.Composition;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using Fma.Core.Entity;
using FmaBasketball.Data.Models;

namespace FmaBasketball.Data.Configurations
{
    [Export(typeof(IEntityConfiguration))]
    public class DivisionConfiguration : EntityTypeConfiguration<Division>, IEntityConfiguration
    {
        public DivisionConfiguration()
        {
            ToTable("Divisions");

            HasMany(d => d.Teams).WithRequired(t => t.Division);
        }

        public void AddConfiguration(ConfigurationRegistrar registrar)
        {
            registrar.Add(this);
        }
    }
}