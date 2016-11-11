import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../../services/Model.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Collection} from "../../../../../../services/Collection.service";

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

  public list: Collection;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
    this.list = data.presentations;
  }

  reload() {
    this.list.reload();
  }
}
