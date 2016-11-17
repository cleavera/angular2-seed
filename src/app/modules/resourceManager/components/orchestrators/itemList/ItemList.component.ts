import {Input} from '@angular/core';
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Collection} from "../../../../../../services/Collection.service";
import {Model} from "../../../../../../services/Model.service";

@Orchestrator({
  name: 'itemList',
  templateUrl: 'itemList.html'
})
export class ItemListOrchestrator {
  @Input()
  items: Collection;

  $resolved: boolean;

  selectedItem: Model;

  template: Model;

  ngOnInit() {
    this.items.$promise.then(() => {
      this.items.getMeta().$promise.then(() => {
        this.$resolved = true;
      });
    });

    this.template = this.items.getTemplate();
  }

  public onSelect(item: Model) {
    this.selectedItem = null;

    let model = item.link.self();

    model.$promise.then(() => {
      model.getMeta().$promise.then(() => {
        this.selectedItem = model;
      });
    });
  }
}
