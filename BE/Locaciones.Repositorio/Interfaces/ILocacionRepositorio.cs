using Locaciones.Dominio;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Locaciones.AccesoADatos.Interfaces
{
    public interface ILocacionRepositorio
    {
        Task<IEnumerable<Pais>> GetPaises();
        Task<IEnumerable<Provincia>> GetProvincias(int id);
        Task<IEnumerable<Ciudad>> GetCiudades(int id);
    }
}
