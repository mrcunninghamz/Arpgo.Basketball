using System.ComponentModel.DataAnnotations;
using FmaBasketball.Data.Enums;

namespace FmaBasketball.Web.Models
{
    public class RegisterTeamViewModel
    {
        [Required]
        [Display(Name = "Team Name")]
        public string Name { get; set; }
        
        [Required]
        [Display(Name = "Team Captain")]
        public string CaptianName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Display(Name = "Preferred Division")]
        public DivisionType Division { get; set; }
        
        [Display(Name = "Reason")]
        public ReasonType Reason { get; set; }

        [Display(Name = "Reason for other")]
        public string OtherReason { get; set; }

        [Required]
        public string HomePhoneNumber { get; set; }

        public string AlternatePhoneNumber { get; set; }


        [Required]
        public string Address1 { get; set; }

        public string Address2 { get; set; }
        
        [Required]
        public string City { get; set; }

        [Required]
        [Display(Name = "State/Country")]
        public string State { get; set; }

        [Required]
        public string Zip { get; set; }

    }
}