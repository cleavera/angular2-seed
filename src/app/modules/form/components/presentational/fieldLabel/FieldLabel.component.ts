import {Input} from '@angular/core';
import {Presentation} from "../../../../../decorators/Presentation.decorator";

@Presentation({
  name: 'fieldLabel',
  templateUrl: 'fieldLabel.html',
  styleUrls: ['fieldLabel.css']
})
export class FieldLabelPresentation {
  @Input()
  label: string;

  @Input()
  inputId: string;
}
