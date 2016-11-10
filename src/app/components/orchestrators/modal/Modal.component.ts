import {Component, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'o-modal',
  templateUrl: 'modal.html',
})
export class ModalOrchestrator {
  isOpen: boolean;

  @Input()
  openLabel: string;

  @Input()
  closeLabel: string;

  @Input()
  modalTitle: string;

  @ViewChild('dialog')
  dialog: { nativeElement: HTMLDialogElement };

  open() {
    this.dialog.nativeElement.showModal();
    this.isOpen = true;
  }

  close() {
    this.dialog.nativeElement.close();
    this.isOpen = false;
  }
}
