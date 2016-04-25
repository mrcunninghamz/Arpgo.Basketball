using System.ComponentModel.DataAnnotations.Schema;
using Fma.Core.Entity;

namespace FmaBasketball.Data.Models
{
    [Table("Team")]
    public class Team : AuditableEntity<int>
    {
        public string Name { get; set; }
    }
}