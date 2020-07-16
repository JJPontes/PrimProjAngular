using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class EventoDto
    {
        public int id { get; set; }
        [StringLength(100, MinimumLength = 3, ErrorMessage = "O {0} é entre 3 e 100 caracteres")]
        public string Local { get; set; }
        public string Data { get; set; }
        [Required(ErrorMessage="Obrigatória inserir um {0}")]
        public string Tema { get; set; }
        public string Lote { get; set; }
        [Range(2,100000, ErrorMessage="Minimo 2 participantes e Máximo 100000 participantes")]
        public int QtdPessoas { get; set; }
        public string ImgUrl { get; set; }
        public string Telefone { get; set; }
        //[EmailAddress]
        public string Email { get; set; }
        public List<LoteDto> Lotes { get; set; }
        public List<PalestranteDto> Palestrante { get; set; }
        public List<RedeSocialDto> RedeSociais { get; set; }
    }
}