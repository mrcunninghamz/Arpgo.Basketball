using System.ComponentModel.Composition;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using Fma.Core.Entity;
using FmaBasketball.Data.Models;

namespace FmaBasketball.Data.Configurations
{
    [Export(typeof(IEntityConfiguration))]
    public class TeamConfiguration : EntityTypeConfiguration<Team>, IEntityConfiguration
    {
        public TeamConfiguration()
        {
            ToTable("teams");
            // ... more configuration         
        }

        public void AddConfiguration(ConfigurationRegistrar registrar)
        {
            registrar.Add(this);
        }
    }
}
