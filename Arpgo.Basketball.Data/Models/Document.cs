using Arpgo.Core.Entity;

namespace Arpgo.Basketball.Data.Models
{
    public class Document : AuditableEntity<int>
    {
        public bool Verified { get; set; }

        public virtual Player Player { get; set; }
        public virtual DocumentType DocumentType { get; set; }
    }
}