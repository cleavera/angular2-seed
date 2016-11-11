import {Component, Injector, Input} from '@angular/core';
import {Resolve} from "../../../../../service/Resolver.annotation";
import {Model} from "../../../../../../services/Model.service";

@Resolve({
  slide: function (data) {
    if (!this.slide) {
      return data.slides.getTemplate().$promise;
    } else {
      return this.slide.getMeta().$promise.then(() => {
        return this.slide;
      });
    }
  }
})
@Component({
  selector: 'o-slide-details',
  templateUrl: 'slideDetails.html',
})
export class SlideDetailsOrchestrator {
  @Input()
  public slide: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.slide = data.slide;
  }
}
