import {Component, Injector} from '@angular/core';
import {Resolve} from "../../service/Resolver.annotation";

@Resolve({
  presentations(data: any) {
    return data.root.link.presentation();
  }
})
@Component({
  selector: 'o-presentations',
  styleUrls: ['presentations.css'],
  templateUrl: './presentations.html',
})
export class PresentationsOrchestrator {
  public presentations;

  constructor(private $injector: Injector) {}

  public ngOnResolve(data: any) {
    this.presentations = data.presentations;
  }
}
