import {Input, Output, EventEmitter} from '@angular/core';
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Model} from "../../../../../../services/Model.service";
import {Collection} from "../../../../../../services/Collection.service";

@Orchestrator({
  name: 'itemDetails',
  templateUrl: 'itemDetails.html'
})
export class ItemDetailsOrchestrator {
  @Input()
  item: Model;

  @Output()
  onChange = new EventEmitter<void>();

  $resolved: boolean;

  children: Collection[];

  public ngOnInit() {
    this.children = [];

    this.item.$promise.then(() => {
      this.item.getMeta().$promise.then(() => {
        this.$resolved = true;
      });

      Object.keys(this.item.link).filter(link => !['self', 'parent'].includes(link)).forEach(link => {
        this.children.push(this.item.link[link]());
      });
    })
  }
}
