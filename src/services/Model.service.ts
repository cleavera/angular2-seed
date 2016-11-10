import {$fetch} from 'webworker-http/dist/index';
import {$partial} from './Partial.helper';
import {Collection} from './Collection.service';
import {ModelMeta} from "./ModelMeta.service";

export class Model {
  private _apiRoot: string;
  private _meta: any;

  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: any;
  link: any;
  id: string;
  type: string;

  constructor(promise: Promise<any>, root: string) {
    this._apiRoot = root;
    this.$promise = promise.then((response) => {
      this.$resolved = true;

      this.id = response.id;
      this.type = response.type;
      this.attributes = response.attributes;
      this.link = {};

      if (response.links) {
        let relationships = Object.keys(response.links);

        relationships.forEach(relationship => {
          this.link[relationship] = $partial(Collection.list, this._apiRoot + response.links[relationship].href, this._apiRoot);
          this.link[relationship].url = this._apiRoot + response.links[relationship].href;
        });
      }

      return this;
    });
  }

  public getMeta(): ModelMeta {
    if (!this._meta) {
      this._meta = ModelMeta.get(this.link.self.url);
    }

    return this._meta;
  }

  static getRoot(url: string): Model {
    return Model.get(url, url);
  }

  static fromMeta(meta: ModelMeta, root: string): Model {
    let model = new Model(meta.$promise.then(() => {
      let response = {
        attributes: {},
        type: meta.type
      };

      Object.keys(meta.attributes).forEach(attribute => {
        if (meta.attributes[attribute].primaryKey === true) {
          return;
        }

        response.attributes[attribute] = null;
      });

      return response;
    }), root);

    model._meta = meta;

    return model;
  }

  private static get(url: string, root: string): Model {
    return new Model($fetch(url), root);
  }
}
