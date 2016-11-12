import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../../services/Model.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Collection} from "../../../../../../services/Collection.service";
import {RequestMethods} from "../../../../../../constants/RequestMethods.constant";

@Orchestrator({
  name: 'contentDetails',
  templateUrl: 'contentDetails.html',
  resolve: {
    content: function (data) {
      if (!this.content) {
        return data.contents.getTemplate().$promise;
      } else {
        return (<any>this).content.getMeta().$promise.then(() => {
          return this.content;
        });
      }
    }
  }
})
export class ContentDetailsOrchestrator {
  @Input()
  public content: Model;

  public list: Collection;

  public title: string;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.content = data.content;
    this.list = data.contents;

    this.title = this.content.methods[RequestMethods.POST] ? `Create ${this.content.description}` : `${this.content.description} details`;
  }

  reload() {
    this.list.reload();
  }
}
