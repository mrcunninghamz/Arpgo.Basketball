using System.ComponentModel.Composition;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using Arpgo.Basketball.Data.Models;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Configurations
{
    [Export(typeof(IEntityConfiguration))]
    public class PlayerConfiguration : EntityTypeConfiguration<Player>, IEntityConfiguration
    {
        public PlayerConfiguration()
        {
            ToTable("Players");

            //Required
            Property(p => p.FirstName).IsRequired();
            Property(p => p.LastName).IsRequired();
            Property(p => p.DateOfBirth).HasColumnType("datetime2").IsRequired();

            //Optional
        }

        public void AddConfiguration(ConfigurationRegistrar registrar)
        {
            registrar.Add(this);
        }
    }

    [Export(typeof(IEntityConfiguration))]
    public class DocumentConfiguration : EntityTypeConfiguration<Document>, IEntityConfiguration
    {
        public DocumentConfiguration()
        {
            ToTable("Documents");

            //Required
            HasRequired(d => d.Player).WithMany(d => d.Documents);
            HasRequired(d => d.DocumentType).WithMany(dt => dt.Documents);

            //Optional
        }

        public void AddConfiguration(ConfigurationRegistrar registrar)
        {
            registrar.Add(this);
        }
    }
}