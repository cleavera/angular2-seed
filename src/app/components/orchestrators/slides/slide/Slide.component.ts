import {Injector, Input} from '@angular/core';
import {Model} from "../../../../../services/Model.service";
import {Orchestrator} from "../../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'slide',
  templateUrl: 'slide.html',
  resolve: {
    slide: function (data) {
      return data.slides.get((<any>this).id).$promise.then(slide => {
        return slide.getMeta().$promise.then(() => {
          return slide;
        });
      });
    }
  }
})
export class SlideOrchestrator {
  @Input()
  public id;

  public slide: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.slide = data.slide;
  }
}
