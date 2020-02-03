using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Locacion.Servicios.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Locaciones.Controllers
{
    [Route("api/locaciones")]
    [ApiController]
    public class LocacionController : Controller
    {
        private readonly ILocacionServicio _locationServicio;
        public LocacionController(ILocacionServicio locationServicio)
        {
            _locationServicio = locationServicio;
        }

        [HttpGet("paises")]     
        public async Task<IActionResult> GetPaises()
        {
            return Ok(await _locationServicio.GetPaises());
        }

        [HttpGet("paises/{id}/provincias")]
        public async Task<IActionResult> GetPronvincias(int id)
        {
            return Ok(await _locationServicio.GetProvincias(id));
        }

        [HttpGet("provincias/{id}/ciudades")]
        public async Task<IActionResult> GetCiudades(int id)
        {
            return Ok(await _locationServicio.GetCiudades(id));
        }


    }
}