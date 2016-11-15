import {Output, EventEmitter, Input} from '@angular/core';
import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {$uniqueId} from "../../../../../../helpers/UniqueId.helper";

@Presentation({
  name: 'inputNumber',
  templateUrl: 'inputNumber.html',
  styleUrls: ['inputNumber.css']
})
export class InputNumberPresentation {
  @Input()
  label: string;

  @Input()
  value: number;

  @Input()
  isRequired: boolean;

  @Output()
  onInput = new EventEmitter<string>();

  id: string;

  isFocused: boolean;

  constructor() {
    this.id = $uniqueId(this.constructor.name);
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
