using Microsoft.EntityFrameworkCore.Migrations;

namespace ProAgil.WebAPI.Migrations
{
    public partial class ImgmUrl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImgUrl",
                table: "Eventos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImgUrl",
                table: "Eventos");
        }
    }
}
