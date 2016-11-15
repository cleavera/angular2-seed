import {NgModule} from '@angular/core'
import {ModalOrchestrator} from "./components/orchestrators/modal/Modal.component";
import {ModalPresentation} from "./components/presentational/modal/Modal.component";
import {ModalHeaderPresentation} from "./components/presentational/modalHeader/ModalHeader.component";

@NgModule({
  declarations: [ModalOrchestrator, ModalPresentation, ModalHeaderPresentation],
  imports     : [],
  exports     : [ModalOrchestrator]
})
export class ModalModule {}
