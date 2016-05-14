using System;
using System.Collections.Generic;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Models
{
    public class Player : AuditableEntity<int>
    {
        public string Name { get; set; }
        public string HomePhoneNumber { get; set; }
        public string AlternatePhoneNumber { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool IsAtLeastSixteen { get; set; }
        public bool IsFamilyMember { get; set; }

        public virtual Team Team { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
    }
}