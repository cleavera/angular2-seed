import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../../services/Model.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";

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

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.slide = data.slide;
  }
}
