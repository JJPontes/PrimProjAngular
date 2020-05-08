using System.Collections.Generic;

namespace ProAgil.Domain
{
    public class Palestrante
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string ImgUrl { get; set; }
        public List<RedeSocial> RedeSociais {get; set;}
        public List<PalestranteEvento> PalestranteEventos {get; set;}
    }
}