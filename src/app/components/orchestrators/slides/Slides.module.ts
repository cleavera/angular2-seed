import {NgModule} from '@angular/core'
import {SlidesOrchestrator} from "./Slides.component";
import {BrowserModule} from "@angular/platform-browser";
import {SlideOrchestrator} from "./slide/Slide.component";
import {SlideDetailsOrchestrator} from "./slide/details/SlideDetails.component";
import {FormModule} from "../form/form.module";
import {ModalModule} from "../../../modules/modal/Modal.module";
import {ContentsModule} from "../content/Contents.module";

@NgModule({
  declarations: [SlidesOrchestrator, SlideOrchestrator, SlideDetailsOrchestrator],
  imports     : [BrowserModule, ContentsModule, FormModule, ModalModule],
  exports     : [SlidesOrchestrator]
})
export class SlidesModule {}
