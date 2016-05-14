using System.Data.Entity.Migrations;

namespace Arpgo.Basketball.Data.Migrations
{
    public partial class baseDataBase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Divisions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedDate = c.DateTime(nullable: false),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Players",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        DateOfBirth = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        IsAtLeastSixteen = c.Boolean(nullable: false),
                        IsFamilyMember = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedDate = c.DateTime(nullable: false),
                        UpdatedBy = c.String(),
                        Team_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Teams", t => t.Team_Id, cascadeDelete: true)
                .Index(t => t.Team_Id);
            
            CreateTable(
                "dbo.Documents",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Verified = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedDate = c.DateTime(nullable: false),
                        UpdatedBy = c.String(),
                        DocumentType_Id = c.Int(nullable: false),
                        Player_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.DocumentTypes", t => t.DocumentType_Id, cascadeDelete: true)
                .ForeignKey("dbo.Players", t => t.Player_Id, cascadeDelete: true)
                .Index(t => t.DocumentType_Id)
                .Index(t => t.Player_Id);
            
            CreateTable(
                "dbo.DocumentTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedDate = c.DateTime(nullable: false),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Reasons",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedDate = c.DateTime(nullable: false),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Teams", "CaptainName", c => c.String(nullable: false));
            AddColumn("dbo.Teams", "Email", c => c.String(nullable: false));
            AddColumn("dbo.Teams", "OtherReason", c => c.String());
            AddColumn("dbo.Teams", "HomePhoneNumber", c => c.String(nullable: false));
            AddColumn("dbo.Teams", "AlternatePhoneNumber", c => c.String());
            AddColumn("dbo.Teams", "Reason_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Teams", "Division_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Teams", "Name", c => c.String(nullable: false));
            CreateIndex("dbo.Teams", "Reason_Id");
            CreateIndex("dbo.Teams", "Division_Id");
            AddForeignKey("dbo.Teams", "Reason_Id", "dbo.Reasons", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Teams", "Division_Id", "dbo.Divisions", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Teams", "Division_Id", "dbo.Divisions");
            DropForeignKey("dbo.Teams", "Reason_Id", "dbo.Reasons");
            DropForeignKey("dbo.Players", "Team_Id", "dbo.Teams");
            DropForeignKey("dbo.Documents", "Player_Id", "dbo.Players");
            DropForeignKey("dbo.Documents", "DocumentType_Id", "dbo.DocumentTypes");
            DropIndex("dbo.Documents", new[] { "Player_Id" });
            DropIndex("dbo.Documents", new[] { "DocumentType_Id" });
            DropIndex("dbo.Players", new[] { "Team_Id" });
            DropIndex("dbo.Teams", new[] { "Division_Id" });
            DropIndex("dbo.Teams", new[] { "Reason_Id" });
            AlterColumn("dbo.Teams", "Name", c => c.String());
            DropColumn("dbo.Teams", "Division_Id");
            DropColumn("dbo.Teams", "Reason_Id");
            DropColumn("dbo.Teams", "AlternatePhoneNumber");
            DropColumn("dbo.Teams", "HomePhoneNumber");
            DropColumn("dbo.Teams", "OtherReason");
            DropColumn("dbo.Teams", "Email");
            DropColumn("dbo.Teams", "CaptainName");
            DropTable("dbo.Reasons");
            DropTable("dbo.DocumentTypes");
            DropTable("dbo.Documents");
            DropTable("dbo.Players");
            DropTable("dbo.Divisions");
        }
    }
}
