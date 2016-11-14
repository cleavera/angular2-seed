import {NgModule} from '@angular/core'
import {ModalOrchestrator} from "./Modal.component";
import {ModalPresentation} from "../../presentational/modal/Modal.component";

@NgModule({
  declarations: [ModalOrchestrator, ModalPresentation],
  imports     : [],
  exports     : [ModalOrchestrator]
})
export class ModalModule {}
