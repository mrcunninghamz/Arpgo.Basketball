using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Models
{
    public class Player : AuditableEntity<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Number { get; set; }
        public string HomePhoneNumber { get; set; }
        public string AlternatePhoneNumber { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public int Status { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool IsAtLeastSixteen { get; set; }
        public bool IsFamilyMember { get; set; }


        public int? Team_Id { get; set; }
        public string AspNetUser_Id { get; set; }


        [ForeignKey("Team_Id")]
        public virtual Team Team { get; set; }

        [ForeignKey("AspNetUser_Id")]
        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<Document> Documents { get; set; }
    }
}