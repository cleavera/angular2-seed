import {Component, Input} from '@angular/core';
import {RequestMethods} from "../../../../../constants/RequestMethods.constant";

@Component({
  selector: 'o-form-buttons',
  templateUrl: 'formButtons.html',
})
export class FormButtonsOrchestrator {
  @Input()
  methods: any;

  canCreate() {
    return this.methods[RequestMethods.POST];
  }

  canEdit() {
    return this.methods[RequestMethods.PUT];
  }

  canDelete() {
    return this.methods[RequestMethods.DELETE];
  }
}
