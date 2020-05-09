using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
         void add<T> (T entity) where T : class;  
         void Update<T> (T entity) where T : class;
         void Delete<T> (T entity) where T : class;

        Task<bool> SaveChangesAsync();

         //Eventos
        Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrantes);
        Task<Evento[]> GetAllEventoAsync(bool includePalestrantes);
        Task<Evento> GetAllEventoAsyncById(int EventoId, bool includePalestrantes);
        
        //Palestrante
        Task<Palestrante[]> GetAllPalestranteAsyncByName(string name, bool includeEventos);
        Task<Palestrante> GetAllPalestranteAsync(int PalestranteId, bool includeEventos);

    }
}