import {Output, EventEmitter, Input} from '@angular/core';
import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {$uniqueId} from "../../../../../../helpers/UniqueId.helper";

@Presentation({
  name: 'inputText',
  templateUrl: 'inputText.html',
  styleUrls: ['inputText.css']
})
export class InputTextPresentation {
  @Input()
  label: string;

  @Input()
  value: string;

  @Input()
  isRequired: boolean;

  @Output()
  onInput = new EventEmitter<string>();

  id: string;

  constructor() {
    this.id = $uniqueId(this.constructor.name);
  }
}
