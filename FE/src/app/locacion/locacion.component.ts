import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LocacionService } from './locacion.service';
import { IPais } from '../interfaces/pais';
import { IProvincia } from '../interfaces/provincia';
import { ICiudad } from '../interfaces/ciudad';

@Component({
  selector: 'locacion',
  templateUrl: './locacion.component.html',
  styleUrls: ['./locacion.component.css']
})
export class LocacionComponent implements OnInit {
  pageTitle: string = 'Locaciones';
  errorMessage: string;
  locacionForm: FormGroup;
  paises: IPais[] = []
  provincias: IProvincia[] = []
  ciudades: ICiudad[] = []

  constructor(private locacionService: LocacionService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.locacionForm = this.fb.group({
      paisesDrop: [new FormControl(null), [Validators.required]],
      provinciasDrop: [new FormControl(null), [Validators.required]],
      ciudadesDrop: [new FormControl(null), [Validators.required]]
    })
    
    this.getPaises();       
  }

  getPaises(){
    this.locacionService.getPaises()
      .subscribe((respuestaPaises: IPais[]) => {        
        this.paises = respuestaPaises;
      },
      (error: any) => {})
  }

  get paisesDrop() {
    return this.locacionForm.get('paisesDrop');
  }

  get provinciasDrop() {
    return this.locacionForm.get('provinciasDrop');
  }

  onPaisChange(){    
    let nombrePais = this.paisesDrop.value;

    let pais = this.paises.find(i => i.nombre === nombrePais);

    this.getProvincias(pais.id);

  }

  getProvincias(paisId: number){
    this.locacionService.getProvincias(paisId)
      .subscribe((respuestaProvincias: any) => {
        this.provincias = respuestaProvincias;
      },
      (error: any) => {})
  }

  onProvinciaChange(){    
    let nombreProvincia = this.provinciasDrop.value;

    let provincia = this.provincias.find(i => i.nombre === nombreProvincia);

    this.getCiudades(provincia.id);

  }

  getCiudades(provinciaId: number){
    this.locacionService.getCiudades(provinciaId)
      .subscribe((respuestaCiudades: any) => {        
        this.ciudades = respuestaCiudades;
      },
      (error: any) => {})
  }


}
