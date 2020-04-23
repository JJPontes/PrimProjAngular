using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProAgil.WebAPI.Model;

namespace ProAgil.WebAPI.Controllers
{
    [ApiController]
    [Route("site/[controller]")]
    public class ValuesController
    {
        [HttpGet]
        public ActionResult<IEnumerable<Evento>> Get()
        {
            return new Evento[] {
                new Evento() {
                    EventoId = 1,
                    Tema = "Angular e DotNet",
                    Local = "São Paulo",
                    Lote = "1º Lote",
                    QtdPessoas = 250,
                    Data = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
                    },
                new Evento() {
                    EventoId = 2,
                    Tema = "Angular e DotNet",
                    Local = "Franco da Rocha",
                    Lote = "2º Lote",
                    QtdPessoas = 150,
                    Data = DateTime.Now.AddDays(5).ToString("dd/MM/yyyy")
                    }
            };
        }

    }
}
