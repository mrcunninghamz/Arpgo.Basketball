using System.Collections.Generic;
using Fma.Core.Entity;

namespace FmaBasketball.Data.Models
{
    public class Team : AuditableEntity<int>
    {
        public string Name { get; set; }
        public string CaptainName { get; set; }
        public string Email { get; set; }
        public string OtherReason { get; set; }
        public string HomePhoneNumber { get; set; }
        public string AlternatePhoneNumber { get; set; }

        public virtual Division Division { get; set; }
        public virtual Reason Reason { get; set; }

        public virtual ICollection<Player> Players { get; set; }
    }
}