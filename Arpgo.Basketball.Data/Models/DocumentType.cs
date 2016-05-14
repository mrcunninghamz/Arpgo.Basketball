using System.Collections.Generic;
using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Models
{
    public class DocumentType : AuditableEntity<int>
    {
        public string Name { get; set; }
        
        public virtual ICollection<Document> Documents { get; set; }
    }
}