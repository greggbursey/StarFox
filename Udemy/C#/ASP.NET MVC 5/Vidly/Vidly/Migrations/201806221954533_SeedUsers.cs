namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'7ad8d16b-8e46-4458-8e2d-5865b3879fac', N'guest@vidly.com', 0, N'AAyi2EVPCFkAIh0mln0WzXxqh1sssd/ENwo5bFd8g8kGgGjE25CTV+3pVBjPNRiVPA==', N'c7ae66bb-890b-4b60-9f64-e2729e9f97c2', NULL, 0, 0, NULL, 1, 0, N'guest@vidly.com')

INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'98ef463b-8338-4cd2-9e49-bab5874dad81', N'admin@vidly.com', 0, N'AEK9ha//uHCNvohwXEnsCBdr9sUJgIo8yacUeDtK5J5IGUak8nEAlbtZJRJs9XM5yg==', N'2e1944f8-cad2-47c5-b8d1-5c1066d0b10c', NULL, 0, 0, NULL, 1, 0, N'admin@vidly.com')
");

            Sql(@"
INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'f20832-dsf08320ds-sd', N'CanManageMovies')
");

            Sql(@"
            INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'98ef463b-8338-4cd2-9e49-bab5874dad81', N'f20832-dsf08320ds-sd')
            ");
        }

        public override void Down()
        {
        }
    }
}
