using System;
using System.Collections.Generic;
using Fma.Core.Entity;

namespace FmaBasketball.Data.Models
{
    public class Player : AuditableEntity<int>
    {
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool IsAtLeastSixteen { get; set; }
        public bool IsFamilyMember { get; set; }
        
        public virtual Team Team { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
    }
}