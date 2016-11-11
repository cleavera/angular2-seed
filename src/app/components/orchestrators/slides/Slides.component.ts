import {Injector} from '@angular/core';
import {Collection} from "../../../../services/Collection.service";
import {Model} from "../../../../services/Model.service";
import {Orchestrator} from "../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'slides',
  templateUrl: 'slides.html',
  resolve: {
    slides: function (data) {
      return data.presentation.link.slide();
    }
  }
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
