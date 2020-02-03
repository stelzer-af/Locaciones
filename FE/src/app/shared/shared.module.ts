import { NgModule } from '@angular/core';
import { CommonModule , DatePipe} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [],
  exports: [  
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatePipe,
  ],
  providers:[]
})
export class SharedModule { }
