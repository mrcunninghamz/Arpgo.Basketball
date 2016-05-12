using System.ComponentModel.DataAnnotations;

namespace FmaBasketball.Web.Models
{
    public class RegisterTeamViewModel : TeamViewModel
    {
        [Required]
        [StringLength(100, MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }

    }

    public class TeamViewModel
    {
        [Required]
        [Display(Name = "Team Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Team Captain")]
        public string CaptainName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Display(Name = "Division")]
        public AngularSelectItemViewModel Division { get; set; }

        [Display(Name = "Reason")]
        public AngularSelectItemViewModel Reason { get; set; }

        [Display(Name = "Reason for other")]
        public string OtherReason { get; set; }

        [Required]
        [Display(Name = "Home Phone")]
        public string HomePhoneNumber { get; set; }

        [Display(Name = "Alternate Phone")]
        public string AlternatePhoneNumber { get; set; }


        [Required]
        public string Address1 { get; set; }

        public string Address2 { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        [Display(Name = "State/Country")]
        public AngularSelectItemViewModel State { get; set; }

        [Required]
        public string Zip { get; set; }
    }
}