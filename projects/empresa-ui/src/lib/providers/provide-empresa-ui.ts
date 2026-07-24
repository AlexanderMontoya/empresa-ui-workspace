import {
  makeEnvironmentProviders
} from '@angular/core';

import { providePrimeNG } from 'primeng/config';

import { EMPRESA_UI_CONFIG } from '../config/empresa-ui.token';
import { EmpresaUIConfig } from './empresa-ui-config';

import { EMPRESA_THEMES } from '../themes/registry';


export function provideEmpresaUI(
  config: EmpresaUIConfig = {}
) {
  const theme =
    EMPRESA_THEMES[config.theme ?? 'aura'];


  return makeEnvironmentProviders([

    providePrimeNG({
      theme: {
        preset: theme,
        options: {
            darkModeSelector: false
        }
      }
    }),

    {
      provide: EMPRESA_UI_CONFIG,
      useValue: config
    }

  ]);

}