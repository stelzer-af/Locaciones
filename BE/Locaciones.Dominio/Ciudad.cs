using System;
using System.Collections.Generic;
using System.Text;

namespace Locaciones.Dominio
{
    public class Ciudad
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int ProvinciaId { get; set; }
    }
}
