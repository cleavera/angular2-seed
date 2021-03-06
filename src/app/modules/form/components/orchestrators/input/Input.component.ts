import {EventEmitter, Input, Output} from '@angular/core';
import {FieldMeta} from "../../../../../../services/FieldMeta.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Validation} from "../../../../../../services/Validation.service";

@Orchestrator({
  name: 'input',
  templateUrl: 'input.html'
})
export class InputOrchestrator {
  @Input()
  data: any;

  @Input()
  fieldMeta: FieldMeta;

  @Output()
  onChange = new EventEmitter<any>();

  validation: Validation;

  onInputChange(value: any) {
    this.validation = this.fieldMeta.validate(value);

    if (this.validation.hasValidationIssues()) {
      return;
    }

    this.onChange.emit(value);
  }

  get isInvalid() {
    return this.validation && this.validation.hasValidationIssues()
  }
}
