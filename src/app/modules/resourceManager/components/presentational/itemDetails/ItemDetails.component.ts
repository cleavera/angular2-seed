import {Presentation} from "../../../../../decorators/Presentation.decorator";
import {Input} from "@angular/core";
import {FieldMeta} from "../../../../../../services/FieldMeta.service";

@Presentation({
  name: 'itemDetails',
  templateUrl: 'itemDetails.html',
  styleUrls: ['itemDetails.css']
})
export class ItemDetailsPresentation {
  @Input()
  attributes: any;

  @Input()
  meta: Map<string, FieldMeta>;

  items: { fieldName: string, value: any, type: string, label: string }[];

  ngOnChanges(change: any) {
    let attributesChanged = change.attributes && change.attributes.currentValue;
    let metaChanged = change.meta && change.meta.currentValue;

    if (attributesChanged) {
      this.attributes = change.attributes.currentValue;
    }

    if (metaChanged) {
      this.meta = change.meta.currentValue;
    }

    this.items = ItemDetailsPresentation.parseAttributes(this.attributes, this.meta);
  }

  private static parseAttributes(attributes: any, meta: Map<string, FieldMeta>): { fieldName: string, value: any, type: string, label: string }[] {
    let out = [];

    Object.keys(attributes).forEach(key => {
      out.push({
        fieldName: key,
        label: meta[key].description,
        type: meta[key].type,
        value: meta[key].viewValue(attributes[key])
      })
    });

    return out;
  }
}
