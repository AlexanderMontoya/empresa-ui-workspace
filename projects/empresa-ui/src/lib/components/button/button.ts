import { Component, input } from '@angular/core';
import { usePreset } from '@primeuix/themes';
import { ButtonModule } from 'primeng/button';
import { EMPRESA_THEMES } from '../../themes/registry';

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
