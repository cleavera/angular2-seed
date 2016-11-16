import {Input, Output, EventEmitter} from '@angular/core';
import {Model} from "../../../../../../services/Model.service";
import {Orchestrator} from "../../../../../decorators/Orchestrator.decorator";
import {Collection} from "../../../../../../services/Collection.service";
import {RequestMethods} from "../../../../../../constants/RequestMethods.constant";

@Orchestrator({
  name: 'itemManager',
  templateUrl: 'itemManager.html'
})
export class ItemMangerOrchestrator {
  @Input()
  public item: Model;

  @Input()
  public list: Collection;

  @Output()
  onChange = new EventEmitter<void>();

  public $resolved: boolean;

  public title: string;

  ngOnInit() {
    this.item.$promise.then(() => {
      this.item.getMeta().$promise.then(() => {
        this.title = this.item.methods[RequestMethods.POST] ? `Create ${this.item.description}` : `Edit ${this.item.description}`;

        this.$resolved = true;
      });
    });
  }

  _onChange() {
    this.onChange.emit();
  }
}
