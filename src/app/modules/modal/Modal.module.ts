import {NgModule} from '@angular/core'
import {ModalOrchestrator} from "./components/orchestrators/modal/Modal.component";
import {ModalPresentation} from "./components/presentational/modal/Modal.component";

@NgModule({
  declarations: [ModalOrchestrator, ModalPresentation],
  imports     : [],
  exports     : [ModalOrchestrator]
})
export class ModalModule {}
