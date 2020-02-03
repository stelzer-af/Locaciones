using Dapper;
using Locaciones.AccesoADatos.Interfaces;
using Locaciones.Dominio;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Locaciones.Repositorio
{
    public class LocacionRepositorio : ILocacionRepositorio
    {
        private readonly string _connectionString;
        public LocacionRepositorio(string connectionString)
        {
            _connectionString = connectionString;          
        }       
        public async Task<IEnumerable<Pais>> GetPaises()
        {
            
            string sql = "SELECT TOP 10 * FROM Paises";

            using (var connection = new SqlConnection(_connectionString))
            {
                var paises = connection.Query<Pais>(sql);

                return paises;
            }
          
        }

        public async Task<IEnumerable<Provincia>> GetProvincias(int id)
        {

            string sql = $"SELECT TOP 10 * FROM Provincias WHERE PaisId = {id}";

            using (var connection = new SqlConnection(_connectionString))
            {
                var provincias = connection.Query<Provincia>(sql);

                return provincias;
            }

        }

        public async Task<IEnumerable<Ciudad>> GetCiudades(int id)
        {

            string sql = $"SELECT TOP 10 * FROM Ciudades WHERE ProvinciaId = {id}";

            using (var connection = new SqlConnection(_connectionString))
            {
                var ciudades = connection.Query<Ciudad>(sql);

                return ciudades;
            }

        }
    }
}
