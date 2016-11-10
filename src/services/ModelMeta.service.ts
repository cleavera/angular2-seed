import {Http} from 'webworker-http/dist/index';
import {IFieldMeta} from "../interfaces/IFieldMeta.interface";

export class ModelMeta {
  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: Map<string, IFieldMeta>;
  links: any;
  type: string;

  constructor(promise: Promise<any>) {
    this.$promise = promise.then(response => {
      this.$resolved = true;

      this.type = response.type;
      this.attributes = response.attributes;
      this.links = response.links;

      return this;
    });
  }

  static get(url: string): ModelMeta {
    return new ModelMeta(Http.getHttpWorker().options(url));
  }
}
