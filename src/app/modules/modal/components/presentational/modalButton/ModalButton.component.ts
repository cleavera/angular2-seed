import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {Input, Output, EventEmitter} from "@angular/core";

@Presentation({
  name: 'modalButton',
  templateUrl: 'modalButton.html',
  styleUrls: ['modalButton.css']
})
export class ModalButtonPresentation {
  @Input()
  label: string;

  @Output()
  open = new EventEmitter<void>();

  onClick() {
    this.open.emit();
  }
}
