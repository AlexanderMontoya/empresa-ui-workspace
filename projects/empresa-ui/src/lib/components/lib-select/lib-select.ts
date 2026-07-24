import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'lib-select',
  imports: [SelectModule, FormsModule],
  template: `
    <p-select
  [options]="options()"
  [optionLabel]="optionLabel()"
  [placeholder]="placeholder()"
  [(ngModel)]="selected">
</p-select>
  `,
  styleUrl: './lib-select.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibSelect {
  options = input<any[]>([]);

  optionLabel = input<string>();

  placeholder = input<string>();

  selected = model<any>();
}
