import {EventEmitter, Input, Output} from '@angular/core';
import {IFieldMeta} from '../../../../../interfaces/IFieldMeta.interface';
import {FieldMeta} from "../../../../../services/FieldMeta.service";
import {Orchestrator} from "../../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'input',
  templateUrl: 'input.html'
})
export class InputOrchestrator {
  @Input()
  data: any;

  @Input()
  fieldMeta: IFieldMeta;

  @Output()
  onChange = new EventEmitter<any>();

  validation: any;

  _fieldMeta: FieldMeta;

  ngOnInit() {
    this._fieldMeta = new FieldMeta(this.fieldMeta);
  }

  onInputChange(value: any) {
    this.validation = this._fieldMeta.validate(value);

    if (Object.keys(this.validation).length) {
      return;
    }

    this.onChange.emit(value);
  }
}
