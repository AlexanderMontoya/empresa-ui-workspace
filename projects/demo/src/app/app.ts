import { Component, signal } from '@angular/core';
import { Button, LibSelect } from 'empresa-ui';

@Component({
  selector: 'app-root',
  imports: [Button, LibSelect],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo');
  cities = [
  { name: 'Lima', code: 'PE' },
  { name: 'Bogotá', code: 'CO' },
  { name: 'Madrid', code: 'ES' }
];

selectedCity = null;
}
