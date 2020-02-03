import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPais } from '../interfaces/pais';
import { IProvincia } from '../interfaces/provincia';
import { ICiudad } from '../interfaces/ciudad';


@Injectable()
export class LocacionService {
    private baseUrlLocaciones = '/api/locaciones/';

     constructor(private http: Http){ }

     getPaises(): Observable<IPais[]> { 
        return this.http.get(this.baseUrlLocaciones + 'Paises')
        .pipe(map(this.extractData))
    }

    getProvincias(paisId:number): Observable<IProvincia[]> { 
        let provinciasUrl = this.baseUrlLocaciones + "Paises/" + paisId + "/provincias";
        return this.http.get(provinciasUrl)
        .pipe(map(this.extractData))
    }

    getCiudades(provinciaId:number): Observable<ICiudad[]> { 
        let ciudadesUrl = this.baseUrlLocaciones + "/provincias/" + provinciaId + '/ciudades';
        return this.http.get(ciudadesUrl)
        .pipe(map(this.extractData))
    }

    private extractData(response: Response) {          
        let body =  response.json();
        return body || {};
    }
    
    private handleError(error: Response): Observable<any> {
        console.error(error);       
        return Observable.throw(error.json().error_description || error.json().ExceptionMessage);
        
    }



}