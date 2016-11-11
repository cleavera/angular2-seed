import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../../services/Model.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'presentationDetails',
  templateUrl: 'presentationDetails.html',
  resolve: {
    presentation: function (data) {
      if (!this.presentation) {
        return data.presentations.getTemplate().$promise;
      } else {
        return this.presentation.getMeta().$promise.then(() => {
          return this.presentation;
        });
      }
    }
  }
})
export class PresentationsDetailsOrchestrator {
  @Input()
  public presentation: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
  }
}
