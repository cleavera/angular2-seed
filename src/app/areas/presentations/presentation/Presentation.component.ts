import {Component, Injector, Input} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";
import {Model} from "../../../../services/Model.service";

@Resolve({
  presentation: function (data) {
    let presentation = data.presentations.get(this.id);

    return presentation.getMeta().$promise.then(() => {
      console.log(presentation);
      return presentation;
    });
  },
  template: function (data) {
    return data.presentations.options();
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

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
  }
}
