using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class PalestranteDto
    {
        public int id { get; set; }
        [Required(ErrorMessage = "Obrigatório é o {0}")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Obrigatório é a {0}")]
        public string Descricao { get; set; }
        [Phone]
        public string Telefone { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string ImgUrl { get; set; }
        public List<RedeSocialDto> RedeSociais { get; set; }
        public List<EventoDto> Eventos { get; set; }
    }
}