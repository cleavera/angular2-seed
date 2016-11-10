import {NgModule} from '@angular/core'
import {PresentationsDetailsOrchestrator} from "./presentation/details/PresentationDetails.component";
import {PresentationOrchestrator} from "./presentation/Presentation.component";
import {PresentationsOrchestrator} from "./Presentations.component";
import {SlidesModule} from "../slides/Slides.module";
import {BrowserModule} from "@angular/platform-browser";
import {ModalModule} from "../modal/Modal.module";

@NgModule({
  declarations: [PresentationsOrchestrator, PresentationOrchestrator, PresentationsDetailsOrchestrator],
  imports     : [BrowserModule, ModalModule, SlidesModule],
  exports     : [PresentationsOrchestrator]
})
export class PresentationsModule {}
