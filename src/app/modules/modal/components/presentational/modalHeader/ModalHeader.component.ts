import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {Input, Output, EventEmitter} from "@angular/core";

@Presentation({
  name: 'modalHeader',
  templateUrl: 'modalHeader.html',
  styleUrls: ['modalHeader.css']
})
export class ModalHeaderPresentation {
  @Input()
  closeLabel: string;

  @Input()
  title: string;

  @Output()
  close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
