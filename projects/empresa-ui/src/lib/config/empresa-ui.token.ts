import { InjectionToken } from '@angular/core';
import { EmpresaUIConfig } from '../providers/empresa-ui-config';

export const EMPRESA_UI_CONFIG =
  new InjectionToken<EmpresaUIConfig>('EMPRESA_UI_CONFIG');