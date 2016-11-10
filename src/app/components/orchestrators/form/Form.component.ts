import {Component, Input} from '@angular/core';
import {ModelMeta} from "../../../../services/ModelMeta.service";

@Component({
  selector: 'o-form',
  templateUrl: 'form.html',
})
export class FormOrchestrator {
  @Input()
  attributes: any;

  @Input()
  meta: ModelMeta;

  fields: string[];

  ngOnInit() {
    this.fields = Object.keys(this.attributes);
  }

  onValueChange(value: any, fieldName: string) {
    this.attributes[fieldName] = value;
  }
}
