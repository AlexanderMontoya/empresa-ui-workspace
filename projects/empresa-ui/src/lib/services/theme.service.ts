import { inject, Injectable } from '@angular/core';
import { PrimeNG } from 'primeng/config';

import { EMPRESA_THEMES } from '../themes/registry';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private primeng = inject(PrimeNG);


  changeTheme(themeName: keyof typeof EMPRESA_THEMES) {

    const theme = EMPRESA_THEMES[themeName];

    if (!theme) {
      console.warn(`Theme ${themeName} not found`);
      return;
    }


    this.primeng.theme.set({
      preset: theme,
      options: {
        darkModeSelector: false
      }
    });

  }

}