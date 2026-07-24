import { inject, Injectable } from '@angular/core';
import { EMPRESA_UI_CONFIG } from '../config/empresa-ui.token';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private config = inject(EMPRESA_UI_CONFIG);

    constructor() {
        console.log(this.config);
    }

}