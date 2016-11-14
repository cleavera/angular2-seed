import {Presentation} from "../../../decorators/Presentation.decorator";
import {ViewChild, Input, Output, EventEmitter} from "@angular/core";

@Presentation({
  name: 'modal',
  templateUrl: 'modal.html',
  styleUrls: ['modal.css']
})
export class ModalPresentation {
  @Input()
  closeLabel: string;

  @Input()
  title: string;

  @Output()
  onClose = new EventEmitter<void>();

  open() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
    this.onClose.emit();
  }

  @ViewChild('dialog')
  dialog: { nativeElement: HTMLDialogElement };
}
