using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class LoteDto
    {
        public int id { get; set; }
        [Required(ErrorMessage="Deve-se preencher o {0}!")]
        public string Nome { get; set; }
        [Required]
        public decimal Preco { get; set; }
        public string DataInicio { get; set; }
        public string DataFim { get; set; }
        [Range(2,100000)]
        public int Quantidade { get; set; }
        
    }
}