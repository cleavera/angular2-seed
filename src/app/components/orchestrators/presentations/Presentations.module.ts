import {NgModule} from '@angular/core'
import {PresentationsDetailsOrchestrator} from "./presentation/details/PresentationDetails.component";
import {PresentationOrchestrator} from "./presentation/Presentation.component";
import {PresentationsOrchestrator} from "./Presentations.component";
import {SlidesModule} from "../slides/Slides.module";
import {BrowserModule} from "@angular/platform-browser";
import {ModalModule} from "../modal/Modal.module";
import {FormOrchestrator} from "../form/Form.component";
import {FormModule} from "../form/form.module";

@NgModule({
  declarations: [PresentationsOrchestrator, PresentationOrchestrator, PresentationsDetailsOrchestrator],
  imports     : [BrowserModule, FormModule, ModalModule, SlidesModule],
  exports     : [PresentationsOrchestrator]
})
export class PresentationsModule {}
