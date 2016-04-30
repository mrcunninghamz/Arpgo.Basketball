using System.Collections.Generic;
using Fma.Core.Entity;

namespace FmaBasketball.Data.Models
{
    public class DocumentType : AuditableEntity<int>
    {
        public string Name { get; set; }
        
        public virtual ICollection<Document> Documents { get; set; }
    }
}