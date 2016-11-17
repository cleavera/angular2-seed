import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {Input, Output, EventEmitter} from "@angular/core";

@Presentation({
  name: 'selectedItem',
  templateUrl: 'selectedItem.html',
  styleUrls: ['selectedItem.css']
})
export class SelectedItemPresentation {
  @Input()
  label: string;

  @Output()
  deSelect = new EventEmitter<void>();

  onClick() {
    console.log(1);
    this.deSelect.emit();
  }
}
