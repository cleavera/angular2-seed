import {$fetch} from './Fetch.helper';
import {$partial} from "./Partial.helper";

export class Model {
  private _apiRoot: string;

  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: any;
  link: any;

  constructor(promise: Promise<any>, root: string) {
    this._apiRoot = root;
    this.$promise = promise.then((response) => {
      this.$resolved = true;

      this.attributes = response.attributes;

      let relationships = Object.keys(response.links);
      this.link = {};

      relationships.forEach(relationship => {
        this.link[relationship] = $partial(Model.get, this._apiRoot + response.links[relationship].href);
      });

      return this;
    });
  }

  static getRoot(url: string): Model {
    return Model.get(url, url);
  }

  private static get(url: string, root: string): Model {
    return new Model($fetch(url), root);
  }
}
