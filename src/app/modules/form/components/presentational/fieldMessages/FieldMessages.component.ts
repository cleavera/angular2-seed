import {Input} from '@angular/core';
import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {Validation} from "../../../../../../services/Validation.service";
import {ValidationMessages} from "../../../constants/ValidationMessages.constant";

@Presentation({
  name: 'fieldMessages',
  templateUrl: 'fieldMessages.html',
  styleUrls: ['fieldMessages.css']
})
export class FieldMessagesPresentation {
  @Input()
  validation: Validation;

  messages: string[];

  ngOnChanges(change) {
    if (change.validation && change.validation.currentValue) {
      this.messages = change.validation.currentValue.getValidationIssues().map(validationIssue => ValidationMessages[validationIssue]);
    }
  }
}
