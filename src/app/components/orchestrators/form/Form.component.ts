import {Input, Output, EventEmitter} from '@angular/core';
import {ModelMeta} from "../../../../services/ModelMeta.service";
import {Orchestrator} from "../../../decorators/Orchestrator.decorator";
import {Model} from "../../../../services/Model.service";

@Orchestrator({
  name: 'form',
  templateUrl: 'form.html'
})
export class FormOrchestrator {
  @Input()
  model: Model;

  @Output()
  save = new EventEmitter<Model>();

  @Output()
  remove = new EventEmitter<Model>();

  attributes: any;

  meta: ModelMeta;

  methods: any;

  fields: string[];

  ngOnInit() {
    this.attributes = this.model.attributes;
    this.meta = this.model.getMeta();
    this.methods = this.model.methods;
    this.fields = Object.keys(this.attributes);
  }

  onValueChange(value: any, fieldName: string) {
    this.attributes[fieldName] = value;
  }

  onSave() {
    this.model.save().then(() => {
      this.save.emit(this.model);
    });
  }

  onRemove() {
    this.model.remove().then(() => {
      this.remove.emit(this.model);
    });
  }
}
