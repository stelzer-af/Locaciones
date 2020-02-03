import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select';

import {
    MatAutocompleteModule,
    MatInputModule,MatNativeDateModule, MatDatepickerModule,MatFormFieldModule, MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: 
    [
        MatAutocompleteModule,
        MatInputModule,
        MatNativeDateModule,
         MatDatepickerModule,
         MatFormFieldModule, 
         BrowserAnimationsModule, 
         MatTableModule,
         MatSelectModule,
         MatProgressSpinnerModule
        ],
    exports: 
    [
        MatAutocompleteModule,
        MatInputModule,
        MatNativeDateModule,
         MatDatepickerModule,
         MatFormFieldModule, 
         BrowserAnimationsModule, 
         MatTableModule,
         MatSelectModule,
         MatProgressSpinnerModule
        ]
})

export class AngularMaterialModule { }