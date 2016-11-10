import {Http} from 'webworker-http/dist/index';

export class ModelMeta {
  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: any;
  type: string;

  constructor(promise: Promise<any>) {
    this.$promise = promise.then(response => {
      this.$resolved = true;

      this.type = response.type;
      this.attributes = response.attributes;

      return this;
    });
  }

  static get(url: string): ModelMeta {
    return new ModelMeta(Http.getHttpWorker().options(url));
  }
}
