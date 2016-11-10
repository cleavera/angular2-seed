import {Component, Injector} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";
import {Collection} from "../../../../services/Collection.service";

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

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.slides = data.slides;
  }
}
