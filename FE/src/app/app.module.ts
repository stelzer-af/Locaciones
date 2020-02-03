import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LocacionModule } from './locacion/locacion.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './shared/angular-materia.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,   
    HttpModule,
    RouterModule.forRoot([      
     
      { path: 'locaciones',component: LocacionModule },
      { path: '', redirectTo: 'locaciones', pathMatch: 'full'},
      { path: '**', redirectTo: 'locaciones', pathMatch: 'full'}

    ]),
    LocacionModule,
    
    
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
