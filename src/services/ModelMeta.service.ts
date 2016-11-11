import {Http} from 'webworker-http/dist/index';
import {IFieldMeta} from "../interfaces/IFieldMeta.interface";

export class ModelMeta {
  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: Map<string, IFieldMeta>;
  links: any;
  type: string;

  constructor(promise: Promise<any>) {
    this.$promise = promise.then(({headers, status, body}) => {
      this.$resolved = true;

      this.type = body.type;
      this.attributes = body.attributes;
      this.links = body.links;

      return this;
    });
  }

  static get(url: string): ModelMeta {
    return new ModelMeta(Http.getHttpWorker().options(url));
  }
}
