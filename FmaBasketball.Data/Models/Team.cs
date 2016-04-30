using Fma.Core.Entity;

namespace FmaBasketball.Data.Models
{
    public class Team : AuditableEntity<int>
    {
        public string Name { get; set; }
    }
}