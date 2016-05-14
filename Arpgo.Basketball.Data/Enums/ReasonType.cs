using System.ComponentModel;

namespace Arpgo.Basketball.Data.Enums
{
    public enum ReasonType
    {
        [Description("Top 8")]
        Top8 = 1,

        [Description("Out of State")]
        OutOfState,

        New,
        Recreational,
        Other
    }

    public enum AReasonsType
    {
        [Description("Top 8")]
        Top8 = 1,

        [Description("Out of State")]
        OutOfState,
    }

    public enum BReasonsType
    {
        New = 3,
        Recreational,
        Other
    }
}