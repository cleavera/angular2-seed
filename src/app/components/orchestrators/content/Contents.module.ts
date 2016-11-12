import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";
import {FormModule} from "../form/form.module";
import {ModalModule} from "../modal/Modal.module";
import {ContentsOrchestrator} from "./Contents.component";
import {ContentOrchestrator} from "./content/Content.component";
import {ContentDetailsOrchestrator} from "./content/details/contentDetails.component";

@NgModule({
  declarations: [ContentsOrchestrator, ContentOrchestrator, ContentDetailsOrchestrator],
  imports     : [BrowserModule, FormModule, ModalModule],
  exports     : [ContentsOrchestrator]
})
export class ContentsModule {}
