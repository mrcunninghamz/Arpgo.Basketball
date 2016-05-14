using System.Data.Entity.Migrations;

namespace Arpgo.Basketball.Data.Migrations
{
    public partial class PlayerAndTeamUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teams", "Address1", c => c.String());
            AddColumn("dbo.Teams", "Address2", c => c.String());
            AddColumn("dbo.Teams", "City", c => c.String());
            AddColumn("dbo.Teams", "State", c => c.String());
            AddColumn("dbo.Teams", "Zip", c => c.String());
            AddColumn("dbo.Players", "HomePhoneNumber", c => c.String());
            AddColumn("dbo.Players", "AlternatePhoneNumber", c => c.String());
            AddColumn("dbo.Players", "Address1", c => c.String());
            AddColumn("dbo.Players", "Address2", c => c.String());
            AddColumn("dbo.Players", "City", c => c.String());
            AddColumn("dbo.Players", "State", c => c.String());
            AddColumn("dbo.Players", "Zip", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Players", "Zip");
            DropColumn("dbo.Players", "State");
            DropColumn("dbo.Players", "City");
            DropColumn("dbo.Players", "Address2");
            DropColumn("dbo.Players", "Address1");
            DropColumn("dbo.Players", "AlternatePhoneNumber");
            DropColumn("dbo.Players", "HomePhoneNumber");
            DropColumn("dbo.Teams", "Zip");
            DropColumn("dbo.Teams", "State");
            DropColumn("dbo.Teams", "City");
            DropColumn("dbo.Teams", "Address2");
            DropColumn("dbo.Teams", "Address1");
        }
    }
}
