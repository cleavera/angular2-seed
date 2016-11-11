import {Input, Output, EventEmitter} from '@angular/core';
import {RequestMethods} from "../../../../../constants/RequestMethods.constant";
import {Orchestrator} from "../../../../decorators/Orchestrator.decorator";

@Orchestrator({
  name: 'formButtons',
  templateUrl: 'formButtons.html',
})
export class FormButtonsOrchestrator {
  @Input()
  methods: any;

  @Output()
  save = new EventEmitter<void>();

  @Output()
  create = new EventEmitter<void>();

  @Output()
  remove = new EventEmitter<void>();

  canCreate() {
    return this.methods[RequestMethods.POST];
  }

  canEdit() {
    return this.methods[RequestMethods.PUT];
  }

  canRemove() {
    return this.methods[RequestMethods.DELETE];
  }

  onCreate() {
    this.create.emit();
  }

  onEdit() {
    this.save.emit();
  }

  onRemove() {
    this.remove.emit();
  }
}
