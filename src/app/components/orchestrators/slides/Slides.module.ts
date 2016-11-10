import {NgModule} from '@angular/core'
import {SlidesOrchestrator} from "./Slides.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [SlidesOrchestrator],
  imports     : [BrowserModule],
  exports     : [SlidesOrchestrator]
})
export class SlidesModule {}
