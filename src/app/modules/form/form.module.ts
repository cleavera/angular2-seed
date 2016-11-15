import {NgModule} from '@angular/core'
import {FormOrchestrator} from "./components/orchestrators/form/Form.component";
import {InputOrchestrator} from "./components/orchestrators/input/Input.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormButtonsOrchestrator} from "./components/orchestrators/formButtons/FormButtons.component";
import {FormButtonsPresentation} from "./components/presentational/formButtons/FormButtons.component";

@NgModule({
  declarations: [FormOrchestrator, FormButtonsOrchestrator, FormButtonsPresentation, InputOrchestrator],
  imports     : [BrowserModule],
  exports     : [FormOrchestrator]
})
export class FormModule {}
