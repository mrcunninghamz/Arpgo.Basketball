using System.Collections.Generic;
using Fma.Core.Entity;

namespace FmaBasketball.Data.Models
{
    public class Division : AuditableEntity<int>
    {
        public string Name { get; set; }
        
        public virtual ICollection<Team> Teams { get; set; }
    }
}