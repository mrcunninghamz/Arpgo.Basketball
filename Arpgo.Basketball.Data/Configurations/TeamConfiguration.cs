using System.ComponentModel.Composition;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using Arpgo.Basketball.Data.Models;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Configurations
{
    [Export(typeof(IEntityConfiguration))]
    public class TeamConfiguration : EntityTypeConfiguration<Team>, IEntityConfiguration
    {
        public TeamConfiguration()
        {
            ToTable("Teams");

            //Required
            Property(t => t.Name).IsRequired();
            Property(t => t.CaptainName).IsRequired();
            Property(t => t.Email).IsRequired();
            Property(t => t.HomePhoneNumber).IsRequired();

            //Optional
            Property(t => t.OtherReason).IsOptional();

            HasMany(t => t.Players).WithRequired(p => p.Team);
        }

        public void AddConfiguration(ConfigurationRegistrar registrar)
        {
            registrar.Add(this);
        }
    }
}
