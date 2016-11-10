import {Component, Injector, Input} from '@angular/core';
import {Resolve} from "../../../../../service/Resolver.annotation";
import {Model} from "../../../../../../services/Model.service";

@Resolve({
  presentation: function (data) {
    if (!this.presentation) {
      return data.presentations.getTemplate();
    } else {
      return this.presentation.getMeta().$promise.then(() => {
        return this.presentation;
      });
    }
  }
})
@Component({
  selector: 'o-presentation-details',
  templateUrl: 'presentationDetails.html',
})
export class PresentationsDetailsOrchestrator {
  @Input()
  public presentation: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
  }
}
