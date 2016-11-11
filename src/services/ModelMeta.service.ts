import {Http} from 'webworker-http/dist/index';
import {IFieldMeta} from "../interfaces/IFieldMeta.interface";

export class ModelMeta {
  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: Map<string, IFieldMeta>;
  headers: any;
  links: any;
  type: string;

  constructor(promise: Promise<any>) {
    this.$promise = promise.then(({headers, body}) => {
      this.$resolved = true;

      this.type = body.type;
      this.attributes = body.attributes;
      this.links = body.links;
      this.headers = headers;

      return this;
    });
  }

  static get(url: string): ModelMeta {
    return new ModelMeta(Http.getHttpWorker().options(url));
  }
}
