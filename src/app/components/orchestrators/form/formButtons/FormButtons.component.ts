import {Input} from '@angular/core';
import {RequestMethods} from "../../../../../constants/RequestMethods.constant";
import {Orchestrator} from "../../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'formButtons',
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
