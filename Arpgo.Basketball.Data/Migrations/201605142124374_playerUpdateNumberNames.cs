namespace Arpgo.Basketball.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class playerUpdateNumberNames : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Players", "Number", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Players", "Number");
        }
    }
}
