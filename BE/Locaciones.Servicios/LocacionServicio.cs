using Locacion.Servicios.Interfaces;
using Locaciones.AccesoADatos.Interfaces;
using Locaciones.Dominio;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Locacion.Servicios
{
    public class LocacionServicio : ILocacionServicio
    {
        private readonly ILocacionRepositorio _locacionRepositorio;
        public LocacionServicio(ILocacionRepositorio locacionRepositorio)
        {
            _locacionRepositorio = locacionRepositorio;
        }
        public async Task<IEnumerable<Pais>> GetPaises()
        {
            return await _locacionRepositorio.GetPaises();
        }

        public async Task<IEnumerable<Provincia>> GetProvincias(int id)
        {
            return await _locacionRepositorio.GetProvincias(id);
        }

        public async Task<IEnumerable<Ciudad>> GetCiudades(int id)
        {
            return await _locacionRepositorio.GetCiudades(id);
        }
    }
}
