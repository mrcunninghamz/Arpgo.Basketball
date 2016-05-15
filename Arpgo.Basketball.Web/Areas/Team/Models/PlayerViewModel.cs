using System;
using System.ComponentModel.DataAnnotations;
using Arpgo.Basketball.Web.Models;

namespace Arpgo.Basketball.Web.Areas.Team.Models
{
    public class PlayerViewModel
    {
        [Required]
        public string Number { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        public string HomePhoneNumber { get; set; }

        public string AlternatePhoneNumber { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        public string Status { get; set; }

        public DateTime DateOfBirth { get; set; }

        public bool IsAtLeastSixteen { get; set; }

        public bool IsFamilyMember { get; set; }
        
        public int Team_Id { get; set; }
    }
    
    public class GetPlayerViewModel : PlayerViewModel
    {
        public int Id { get; set; }

        public string AspNetUser_Id { get; set; }
    }
}