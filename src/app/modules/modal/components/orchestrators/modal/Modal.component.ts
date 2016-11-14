import {ViewChild, Input} from '@angular/core';
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {ModalPresentation} from "../../presentational/modal/Modal.component";

@Orchestrator({
  name: 'modal',
  templateUrl: 'modal.html'
})
export class ModalOrchestrator {
  isOpen: boolean;

  @Input()
  openLabel: string;

  @Input()
  closeLabel: string;

  @Input()
  modalTitle: string;

  @ViewChild('modal')
  modal: ModalPresentation;

  open() {
    this.modal.open();
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }
}
