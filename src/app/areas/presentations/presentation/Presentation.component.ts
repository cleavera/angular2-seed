import {Component, Injector} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";

@Resolve({
  presentation: function (data) {
    return data.presentations.get(this.id);
  },
  slides: function (data) {
    return data.presentations.get(this.id).link.slide();
  }
})
@Component({
  selector: 'o-presentation',
  styleUrls: ['presentation.css'],
  templateUrl: './presentation.html',
})
export class PresentationsDetailsOrchestrator {
  public presentation;
  public slides;
  public id;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
    this.slides = data.slides;
    console.log(data);
  }
}
