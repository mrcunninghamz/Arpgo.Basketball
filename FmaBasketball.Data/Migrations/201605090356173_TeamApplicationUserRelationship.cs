namespace FmaBasketball.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TeamApplicationUserRelationship : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teams", "AspNetUser_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Teams", "AspNetUser_Id");
            AddForeignKey("dbo.Teams", "AspNetUser_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Teams", "AspNetUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Teams", new[] { "AspNetUser_Id" });
            DropColumn("dbo.Teams", "AspNetUser_Id");
        }
    }
}
