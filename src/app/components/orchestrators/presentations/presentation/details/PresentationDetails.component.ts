import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../../services/Model.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Collection} from "../../../../../../services/Collection.service";
import {RequestMethods} from "../../../../../../constants/RequestMethods.constant";

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

  public title: string;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
    this.list = data.presentations;

    this.title = this.presentation.methods[RequestMethods.POST] ? `Create ${this.presentation.description}` : `${this.presentation.description} details`;
  }

  reload() {
    this.list.reload();
  }
}
