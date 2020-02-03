using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Locacion.Servicios;
using Locacion.Servicios.Interfaces;
using Locaciones.AccesoADatos.Interfaces;
using Locaciones.Repositorio;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Locaciones
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940

        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            string locacionConnectionString = _configuration.GetConnectionString("LocationsDb");

            services.AddScoped<ILocacionServicio, LocacionServicio>();
            services.AddScoped<ILocacionRepositorio, LocacionRepositorio>(s => new LocacionRepositorio(locacionConnectionString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseMvc();           
        }
    }
}
