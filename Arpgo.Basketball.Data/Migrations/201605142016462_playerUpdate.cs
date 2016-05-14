namespace Arpgo.Basketball.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class playerUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Players", "FirstName", c => c.String(nullable: false));
            AddColumn("dbo.Players", "LastName", c => c.String(nullable: false));
            AddColumn("dbo.Players", "AspNetUser_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Players", "AspNetUser_Id");
            AddForeignKey("dbo.Players", "AspNetUser_Id", "dbo.AspNetUsers", "Id");
            DropColumn("dbo.Players", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Players", "Name", c => c.String(nullable: false));
            DropForeignKey("dbo.Players", "AspNetUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Players", new[] { "AspNetUser_Id" });
            DropColumn("dbo.Players", "AspNetUser_Id");
            DropColumn("dbo.Players", "LastName");
            DropColumn("dbo.Players", "FirstName");
        }
    }
}
