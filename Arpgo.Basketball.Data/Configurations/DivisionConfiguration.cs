using System.ComponentModel.Composition;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using Arpgo.Basketball.Data.Models;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Configurations
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