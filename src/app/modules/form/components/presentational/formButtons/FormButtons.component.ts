import {Output, EventEmitter, Input} from '@angular/core';
import {Presentation} from "../../../../../decorators/Presentation.decorator";

@Presentation({
  name: 'formButtons',
  templateUrl: 'formButtons.html',
  styleUrls: ['formButtons.css']
})
export class FormButtonsPresentation {
  @Input()
  label: string;

  @Output()
  onClick = new EventEmitter<void>();
}
