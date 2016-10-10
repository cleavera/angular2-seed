import {$fetch} from './Fetch.helper';
import {Model} from "./Model.service";

export class Collection {
  private _apiRoot: string;

  $resolved: boolean = false;
  $promise: Promise<any>;
  data: [Model];
  link: any;

  constructor(promise: Promise<any>, root: string) {
    this._apiRoot = root;
    this.$promise = promise.then((response) => {
      this.$resolved = true;

      this.data = response.map(data => {
        return new Model(Promise.resolve(data), root);
      });

      return this;
    });
  }

  public static list(url: string, root: string): Collection {
    return new Collection($fetch(url), root);
  }
}
