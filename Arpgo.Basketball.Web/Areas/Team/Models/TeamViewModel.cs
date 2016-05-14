using System.ComponentModel.DataAnnotations;
using Arpgo.Basketball.Web.Models;

namespace Arpgo.Basketball.Web.Areas.Team.Models
{
    public class TeamViewModel
    {
        public int Id { get; set; }

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
        
        public string AspNetUser_Id { get; set; }
    }

    public class PlayerViewModel
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        public string AspNetUser_Id { get; set; }
    }
}