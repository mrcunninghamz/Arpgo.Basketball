using System.Data.Entity.ModelConfiguration.Configuration;

namespace Fma.Core.Entity
{
    public interface IEntityConfiguration
    {
        void AddConfiguration(ConfigurationRegistrar registrar);
    }
}