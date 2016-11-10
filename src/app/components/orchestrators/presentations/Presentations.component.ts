import {Component, Injector} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";
import {Model} from "../../../../services/Model.service";
import {Collection} from "../../../../services/Collection.service";

@Resolve({
  presentations(data: any) {
    return data.root.link.presentation();
  }
})
@Component({
  selector: 'o-presentations',
  templateUrl: 'presentations.html',
})
export class PresentationsOrchestrator {
  public presentations: Collection;
  public selectedPresentation: Model;

  constructor(private $injector: Injector) {}

  public ngOnResolve(data: any) {
    this.presentations = data.presentations;
  }

  public onSelect(presentation: Model) {
    this.selectedPresentation = presentation;
  }
}
