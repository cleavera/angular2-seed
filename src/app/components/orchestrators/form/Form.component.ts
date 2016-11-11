import {Input} from '@angular/core';
import {ModelMeta} from "../../../../services/ModelMeta.service";
import {Orchestrator} from "../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'form',
  templateUrl: 'form.html'
})
export class FormOrchestrator {
  @Input()
  attributes: any;

  @Input()
  meta: ModelMeta;

  @Input()
  methods: any;

  fields: string[];

  ngOnInit() {
    this.fields = Object.keys(this.attributes);
  }

  onValueChange(value: any, fieldName: string) {
    this.attributes[fieldName] = value;
  }
}
