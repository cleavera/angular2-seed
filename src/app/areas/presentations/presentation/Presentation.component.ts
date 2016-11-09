import {Component, Injector, Input} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";
import {Model} from "../../../../services/Model.service";
import {Collection} from "../../../../services/Collection.service";

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
  @Input()
  public id;

  public presentation: Model;
  public slides: Collection;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
    this.slides = data.slides;
  }
}
