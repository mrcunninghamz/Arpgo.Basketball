using System.Collections.Generic;
using System.ComponentModel.Composition;

namespace Arpgo.Core.Entity
{
    public class ContextConfiguration
    {
        [ImportMany(typeof(IEntityConfiguration))]
        public IEnumerable<IEntityConfiguration> Configurations{ get; set; }
    }
}