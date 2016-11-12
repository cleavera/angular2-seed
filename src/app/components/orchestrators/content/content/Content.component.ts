import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../services/Model.service";
import {Orchestrator} from "../../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'content',
  templateUrl: 'content.html',
  resolve: {
    content: function (data) {
      return data.contents.get((<any>this).id).$promise.then(content => {
        return content.getMeta().$promise.then(() => {
          return content;
        });
      });
    }
  }
})
export class ContentOrchestrator {
  @Input()
  public id;

  public content: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.content = data.content;
  }
}
