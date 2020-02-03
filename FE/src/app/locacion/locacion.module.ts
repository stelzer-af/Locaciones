import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-materia.module';
import { LocacionComponent } from './locacion.component';
import { LocacionService } from './locacion.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([      
      { path: 'locaciones',  component: LocacionComponent }    
     
  ]),
  AngularMaterialModule,
  SharedModule
  ],
  exports: [ ],

  declarations: [LocacionComponent],   
  providers:[LocacionService],
  entryComponents: [],
})
export class LocacionModule { }
