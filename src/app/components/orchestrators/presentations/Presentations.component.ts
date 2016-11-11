import {Injector} from '@angular/core';
import {Model} from "../../../../services/Model.service";
import {Collection} from "../../../../services/Collection.service";
import {Orchestrator} from "../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'presentations',
  templateUrl: 'presentations.html',
  resolve: {
    presentations(data: any) {
      return data.root.link.presentation().$promise;
    }
  }
})
export class PresentationsOrchestrator {
  public presentations: Collection;
  public selectedPresentation: Model;

  constructor(private $injector: Injector) {}

  public ngOnResolve(data: any) {
    this.presentations = data.presentations;
  }

  public onSelect(presentation: Model) {
    this.selectedPresentation = presentation;
  }
}
