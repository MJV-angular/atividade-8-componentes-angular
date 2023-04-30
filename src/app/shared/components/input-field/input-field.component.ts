import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() classCss: any;
  @Input() id!: string;
  @Input() label!: string;
  @Input() type = "text";
  @Input() placeholder!: string;
  @Input() template!: TemplateRef<any>;
}
