import {Injector} from '@angular/core';
import {Collection} from "../../../../services/Collection.service";
import {Model} from "../../../../services/Model.service";
import {Orchestrator} from "../../../decorators/Orchestrator.decorator";
import {$setInput} from "../../../../helpers/SetInput.helper";

@Orchestrator({
  name: 'contents',
  templateUrl: 'contents.html',
  resolve: {
    contents: function (data) {
      return data.slide.link.content();
    }
  }
})
export class ContentsOrchestrator {
  public contents: Collection;
  public selectedContent: Model;

  constructor(private $injector: Injector) {}

  ngOnResolve(data: any) {
    this.contents = data.contents;
  }

  public onSelect(content: Model) {
    $setInput(this, 'selectedContent', content);
  }
}
