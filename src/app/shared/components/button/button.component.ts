import { Component, Directive, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MixinFunction } from '../../mixins/mixins';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})


export class ButtonComponent {
  @Input() label: string = "login"
  @Input() typeButton: string = "submit"
  @Output()
  onClick = new EventEmitter<Event>();
}
