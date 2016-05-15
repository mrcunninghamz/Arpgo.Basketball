using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Models
{
    public class Team : AuditableEntity<int>
    {
        public string Name { get; set; }
        public string CaptainFirstName { get; set; }
        public string CaptainLastName { get; set; }
        public string Email { get; set; }
        public string OtherReason { get; set; }
        public string HomePhoneNumber { get; set; }
        public string AlternatePhoneNumber { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }

        ///foreign key maps otherwise use fluentAPI
        public int Division_Id { get; set; }
        public int Reason_Id { get; set; }
        public string AspNetUser_Id { get; set; }

        [ForeignKey("Division_Id")]
        public virtual Division Division { get; set; }

        [ForeignKey("Reason_Id")]
        public virtual Reason Reason { get; set; }

        [ForeignKey("AspNetUser_Id")]
        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<Player> Players { get; set; }
    }
}