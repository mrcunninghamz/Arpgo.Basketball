using System.Data.Entity.ModelConfiguration.Configuration;

namespace Arpgo.Core.Entity
{
    public interface IEntityConfiguration
    {
        void AddConfiguration(ConfigurationRegistrar registrar);
    }
}