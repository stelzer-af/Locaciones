using System;
using System.Collections.Generic;
using System.Text;

namespace Locaciones.Dominio
{
    public class Provincia
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int PaisId { get; set; }
    }
}
