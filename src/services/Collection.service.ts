import {$fetch} from 'webworker-http/dist/index';
import {Model} from "./Model.service";
import {ModelMeta} from "./ModelMeta.service";

export class Collection {
  private _apiRoot: string;
  private _selfLink: string;

  $resolved: boolean = false;
  $promise: Promise<any>;
  data: [Model];
  link: any;

  constructor(promise: Promise<any>, root: string, url: string) {
    this._selfLink = url;
    this._apiRoot = root;

    this.$promise = promise.then(({headers, body}) => {
      this.$resolved = true;

      this.data = body.map(data => {
        return new Model(Promise.resolve({headers: headers, body: data}), root);
      });

      return this;
    });
  }

  public getTemplate(): Model {
    return Model.fromMeta(ModelMeta.get(this._selfLink), this._apiRoot);
  }

  public get(id: string, type?: string) {
    return this.data.filter((model: Model) => {
      if (type) {
        return model.type === type && model.id === id;
      }

      return model.id === id;
    })[0];
  }

  public static list(url: string, root: string): Collection {
    return new Collection($fetch(url), root, url);
  }
}
