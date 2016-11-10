import {$fetch} from 'webworker-http/dist/index';
import {$partial} from './Partial.helper';
import {Collection} from './Collection.service';
import {ModelMeta} from "./ModelMeta.service";

export class Model {
  private _apiRoot: string;

  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: any;
  link: any;
  id: string;
  type: string;
  meta: any;

  constructor(promise: Promise<any>, root: string) {
    this._apiRoot = root;
    this.$promise = promise.then((response) => {
      this.$resolved = true;

      this.id = response.id;
      this.type = response.type;
      this.attributes = response.attributes;

      let relationships = Object.keys(response.links);
      this.link = {};

      relationships.forEach(relationship => {
        this.link[relationship] = $partial(Collection.list, this._apiRoot + response.links[relationship].href, this._apiRoot);
        this.link[relationship].url = this._apiRoot + response.links[relationship].href;
      });

      return this;
    });
  }

  public getMeta(): ModelMeta {
    if (!this.meta) {
      this.meta = ModelMeta.get(this.link.self.url);
    }
    
    return this.meta;
  }

  static getRoot(url: string): Model {
    return Model.get(url, url);
  }

  private static get(url: string, root: string): Model {
    return new Model($fetch(url), root);
  }
}
