import {NgModule} from '@angular/core'
import {PresentationsDetailsOrchestrator} from "./presentation/details/PresentationDetails.component";
import {PresentationOrchestrator} from "./presentation/Presentation.component";
import {PresentationsOrchestrator} from "./Presentations.component";
import {SlidesModule} from "../slides/Slides.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [PresentationsOrchestrator, PresentationOrchestrator, PresentationsDetailsOrchestrator],
  imports     : [BrowserModule, SlidesModule],
  exports     : [PresentationsOrchestrator]
})
export class PresentationsModule {}
