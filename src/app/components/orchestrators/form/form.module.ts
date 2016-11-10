import {NgModule} from '@angular/core'
import {FormOrchestrator} from "./Form.component";
import {InputOrchestrator} from "./input/Input.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [FormOrchestrator, InputOrchestrator],
  imports     : [BrowserModule],
  exports     : [FormOrchestrator]
})
export class FormModule {}
