import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../services/Model.service";
import {Orchestrator} from "../../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'presentation',
  templateUrl: 'presentation.html',
  resolve: {
    presentation: function(data) {
      return data.presentations.get((<any>this).id).$promise.then(presentation => {
        return presentation.getMeta().$promise.then(() => {
          return presentation;
        });
      });
    }
  }
})
export class PresentationOrchestrator {
  @Input()
  public id;

  public presentation: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
  }
}
