import {$fetch} from 'webworker-http/dist/index';
import {Model} from "./Model.service";
import {ModelMeta} from "./ModelMeta.service";
import {IHttpResponse} from "../interfaces/IHttpResponse.interface";

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

    this.parseResponse(promise);
  }

  public getTemplate(): Model {
    return Model.fromMeta(ModelMeta.get(this._selfLink), this._apiRoot);
  }

  public get(id: string, type?: string): Model {
    return this.data.filter((model: Model) => {
      if (type) {
        return model.type === type && model.id === id;
      }

      return model.id === id;
    })[0].link.self();
  }

  public reload(): void {
    this.$resolved = false;
    this.parseResponse($fetch(this._selfLink));
  }

  private parseResponse(promise: Promise<IHttpResponse>): void {
    this.$promise = promise.then(({headers, body}: IHttpResponse) => {
      this.$resolved = true;

      this.data = body.map(data => {
        return new Model(Promise.resolve({headers: headers, body: data}), this._apiRoot);
      });

      return this;
    });
  }

  public static list(url: string, root: string): Collection {
    return new Collection($fetch(url), root, url);
  }
}
