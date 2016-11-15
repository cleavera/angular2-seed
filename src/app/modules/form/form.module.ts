import {NgModule} from '@angular/core'
import {FormOrchestrator} from "./components/orchestrators/form/Form.component";
import {InputOrchestrator} from "./components/orchestrators/input/Input.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormButtonsOrchestrator} from "./components/orchestrators/formButtons/FormButtons.component";
import {FormButtonsPresentation} from "./components/presentational/formButtons/FormButtons.component";
import {InputTextPresentation} from "./components/presentational/inputText/InputText.component";
import {InputOptionPresentation} from "./components/presentational/inputOption/InputOption.component";
import {InputNumberPresentation} from "./components/presentational/inputNumber/InputNumber.component";
import {InputContentPresentation} from "./components/presentational/inputContent/InputContent.component";
import {FieldMessagesPresentation} from "./components/presentational/fieldMessages/FieldMessages.component";

@NgModule({
  declarations: [
    FieldMessagesPresentation,
    FormOrchestrator,
    FormButtonsOrchestrator,
    FormButtonsPresentation,
    InputOrchestrator,
    InputContentPresentation,
    InputNumberPresentation,
    InputOptionPresentation,
    InputTextPresentation
  ],
  imports     : [BrowserModule],
  exports     : [FormOrchestrator]
})
export class FormModule {}
