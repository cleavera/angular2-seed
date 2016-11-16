import {Input} from '@angular/core';
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Collection} from "../../../../../../services/Collection.service";
import {Model} from "../../../../../../services/Model.service";
import {$setInput} from "../../../../../../helpers/SetInput.helper";

@Orchestrator({
  name: 'itemList',
  templateUrl: 'itemList.html'
})
export class ItemListOrchestrator {
  @Input()
  items: Collection;

  selectedItem: Model;

  template: Model;

  ngOnInit() {
    this.template = this.items.getTemplate();
  }

  public onSelect(item: Model) {
    $setInput(this, 'selectedItem', item.link.self());
  }
}
