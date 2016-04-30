using Fma.Core.Entity;

namespace FmaBasketball.Data.Models
{
    public class Address : AuditableEntity<int>
    {
        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }
    }
}