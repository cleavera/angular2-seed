import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {Input, Output, EventEmitter} from "@angular/core";
import {FieldMeta} from "../../../../../../services/FieldMeta.service";
import {Model} from "../../../../../../services/Model.service";

@Presentation({
  name: 'itemList',
  templateUrl: 'itemList.html',
  styleUrls: ['itemList.css']
})
export class ItemListPresentation {
  @Input()
  items: Model[];

  @Input()
  title: string;

  @Output()
  select = new EventEmitter<Model>();

  onSelect(item: Model) {
    this.select.emit(item);
  }
}
