namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MoviesInitialDBModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Movies",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Genre = c.String(nullable: false),
                        ReleaseDate = c.DateTime(nullable: false),
                        DateAdded = c.DateTime(nullable: false),
                        NumberInStock = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);

            Sql("INSERT INTO Movies" +
                "(Name, Genre, ReleaseDate, DateAdded, NumberInStock)" +
                "VALUES" +
                "('Freddy goes to school', 'Horror', SysDateTime(), SysDateTime(), 5)");
            Sql("INSERT INTO Movies" +
                "(Name, Genre, ReleaseDate, DateAdded, NumberInStock)" +
                "VALUES" +
                "('Freddy comes back from school', 'Romance', SysDateTime(), SysDateTime(), 100)");
            Sql("INSERT INTO Movies" +
                "(Name, Genre, ReleaseDate, DateAdded, NumberInStock)" +
                "VALUES" +
                "('Freddy goes home for the summer', 'Home Improvement', SysDateTime(), SysDateTime(), 1)");
            Sql("INSERT INTO Movies" +
                "(Name, Genre, ReleaseDate, DateAdded, NumberInStock)" +
                "VALUES" +
                "('Freddy likes to go swimming', 'Horror', SysDateTime(), SysDateTime(), 0)");

        }
        
        public override void Down()
        {
            DropTable("dbo.Movies");
        }
    }
}
