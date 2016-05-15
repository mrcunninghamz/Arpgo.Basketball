using System.ComponentModel;

namespace Arpgo.Basketball.Data.Enums
{
    public enum PlayerStatus
    {
        [Description("Pending Player Registration")]
        Added = 1,

        [Description("Email Sent")]
        EmailSent,

        [Description("Registered")]
        Registered,

        [Description("Verification Pending")]
        VerificationPending,

        [Description("Verified")]
        Verified,

        [Description("Active and Eligible")]
        ActiveEligible,

        [Description("Inactive and Eligible")]
        InactiveEligible,

        [Description("Not Eligible")]
        NotElible,

        [Description("Free Agent")]
        FreeAgent,

    }
}