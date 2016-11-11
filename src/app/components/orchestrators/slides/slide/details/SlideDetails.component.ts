import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../../services/Model.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Collection} from "../../../../../../services/Collection.service";
import {RequestMethods} from "../../../../../../constants/RequestMethods.constant";

@Orchestrator({
  name: 'slideDetails',
  templateUrl: 'slideDetails.html',
  resolve: {
    slide: function (data) {
      if (!this.slide) {
        return data.slides.getTemplate().$promise;
      } else {
        return (<any>this).slide.getMeta().$promise.then(() => {
          return this.slide;
        });
      }
    }
  }
})
export class SlideDetailsOrchestrator {
  @Input()
  public slide: Model;

  public list: Collection;

  public title: string;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.slide = data.slide;
    this.list = data.slides;

    this.title = this.slide.methods[RequestMethods.POST] ? `Create ${this.slide.description}` : `${this.slide.description} details`;
  }

  reload() {
    this.list.reload();
  }
}
