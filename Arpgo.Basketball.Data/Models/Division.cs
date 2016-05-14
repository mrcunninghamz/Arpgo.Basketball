using System.Collections.Generic;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Models
{
    public class Division : AuditableEntity<int>
    {
        public string Name { get; set; }
        
        public virtual ICollection<Team> Teams { get; set; }
    }
}