import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    FormContainerComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
 exports:[
  InputFieldComponent,
  FormContainerComponent,
  ButtonComponent
 ]
})
export class SharedModule { }
