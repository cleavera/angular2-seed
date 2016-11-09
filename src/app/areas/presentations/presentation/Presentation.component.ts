import {Component, Injector} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";
import {ActivatedRoute} from "@angular/router";

@Resolve({
  presentation: function (data) {
    return data.presentations.get(this.id);
  }
})
@Component({
  selector: 'o-presentation',
  styleUrls: ['presentation.css'],
  templateUrl: './presentation.html',
})
export class PresentationsDetailsOrchestrator {
  public presentation;
  public id;

  constructor(private $injector: Injector, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['presentationId'];
    });
  }

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
    console.log(this.presentation);
  }
}
