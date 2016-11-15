import {Output, EventEmitter, Input} from '@angular/core';
import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {$uniqueId} from "../../../../../../helpers/UniqueId.helper";

@Presentation({
  name: 'inputOption',
  templateUrl: 'inputOption.html',
  styleUrls: ['inputOption.css']
})
export class InputOptionPresentation {
  @Input()
  label: string;

  @Input()
  value: any;

  @Input()
  options: {label: string, value: any}[];

  @Input()
  isRequired: boolean;

  @Output()
  onInput = new EventEmitter<string>();

  id: string;

  constructor() {
    this.id = $uniqueId(this.constructor.name);
  }
}
