import { NgModule } from "@angular/core";
import { CommonFormCompoment } from "./common-form/common-form.compoment";

@NgModule({
    declarations:[
        CommonFormCompoment
    ],
    exports:[
        CommonFormCompoment
    ],
    imports:[]
})
export class CommonModule2{}