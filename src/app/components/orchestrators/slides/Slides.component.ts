import {Component, Injector} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";
import {Collection} from "../../../../services/Collection.service";
import {Model} from "../../../../services/Model.service";

@Resolve({
  slides: function (data) {
    return data.presentation.link.slide();
  }
})
@Component({
  selector: 'o-slides',
  templateUrl: 'slides.html',
})
export class SlidesOrchestrator {
  public slides: Collection;
  public selectedSlide: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.slides = data.slides;
  }

  public onSelect(slide: Model) {
    this.selectedSlide = slide;
  }
}
