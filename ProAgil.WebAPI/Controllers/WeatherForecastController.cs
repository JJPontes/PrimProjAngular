using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProAgil.WebAPI.Data;
using ProAgil.WebAPI.Model;

namespace ProAgil.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecast : ControllerBase
    {
        public readonly DataContext _context;
        public WeatherForecast(DataContext context)
        { 
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await _context.Eventos.ToListAsync();
                return Ok(results);    
            }
            catch (System.Exception)
            {
         
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
            
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Evento>> Get(int id)
        {
            try
            {
                var results = await _context.Eventos.FirstOrDefaultAsync(x => x.EventoId == id);
                return Ok(results);    
            }
            catch (System.Exception)
            {
         
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
            
        }
    }
}
