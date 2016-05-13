using System.ComponentModel.DataAnnotations;

namespace FmaBasketball.Web.Areas.Team.Models
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
}