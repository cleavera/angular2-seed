import {Component, Injector} from '@angular/core';
import {Resolve} from "../../../service/Resolver.annotation";
import {ActivatedRoute} from "@angular/router";

@Resolve({
  presentation: function (data) {
    return data.presentations.get(this.id);
  },
  slides: function (data) {
    console.log(data.presentation);
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

  constructor(private $injector: Injector, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['presentationId'];
    });
  }

  ngOnResolve(data: any) {
    this.presentation = data.presentation;
    this.slides = data.slides;
    console.log(data);
  }
}
