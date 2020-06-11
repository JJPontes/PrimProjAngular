using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class RedeSocialDto
    {
        public int id { get; set; }
        [Required(ErrorMessage="Obrigatório é {0}")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Obrigatório é {0}")]
        public string URL { get; set; }
    }
}