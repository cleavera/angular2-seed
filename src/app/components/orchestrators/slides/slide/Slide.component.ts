import {Component, Injector, Input} from '@angular/core';
import {Resolve} from "../../../../service/Resolver.annotation";
import {Model} from "../../../../../services/Model.service";

@Resolve({
  slide: function (data) {
    return data.slides.get(this.id).$promise.then(slide => {
      return slide.getMeta().$promise.then(() => {
        return slide;
      });
    });
  }
})
@Component({
  selector: 'o-slide',
  templateUrl: 'slide.html',
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
