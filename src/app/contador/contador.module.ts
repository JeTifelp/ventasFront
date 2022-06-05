import {NgModule} from '@angular/core';
import { ContadorFormComponente } from './contador-list/contador-form.component';
@NgModule({
    declarations:[
        ContadorFormComponente        
    ],
    exports:[
        ContadorFormComponente
    ],
    imports:[]
})
export class contadorModule{

}