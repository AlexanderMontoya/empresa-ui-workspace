import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-button',
  imports: [
    ButtonModule
  ],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input('');

  /* severity = input<
    'success' |
    'info' |
    'warn' |
    'danger'
  >('info'); */
}
