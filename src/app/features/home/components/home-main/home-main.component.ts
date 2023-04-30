import { Component, ViewEncapsulation } from '@angular/core';
import { MixinFunction } from 'src/app/shared/mixins/mixins';
const ComponentMixin = MixinFunction(
  class Parent {

  })
@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeMainComponent extends ComponentMixin {
  dataForm: any = [
    {
      label: "Nome",
      placeholder: "Digite seu nome.",
      type: "text",
      id: "nome"
    },
    {
      label: "Cpf",
      placeholder: "Digite seu cpf.",
      type: "number",
      id: "cpf"
    },
    {
      label: "E-mail",
      placeholder: "Digite seu email.",
      type: "email",
      id: "email"
    },
    {
      label: "Senha",
      placeholder: "Digite sua senha.",
      type: "password",
      id: "password"
    }
  ]


}
