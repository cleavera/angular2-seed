import {$fetch} from 'webworker-http/dist/index';
import {$partial} from './Partial.helper';
import {Collection} from './Collection.service';
import {ModelMeta} from "./ModelMeta.service";
import {RequestMethods} from "../constants/RequestMethods.constant";
import {$enumKeys} from "./EnumKeys.helper";

export class Model {
  private _apiRoot: string;
  private _meta: any;

  $resolved: boolean = false;
  $promise: Promise<any>;
  attributes: any;
  link: any;
  id: string;
  type: string;
  methods: any;

  constructor(promise: Promise<any>, root: string) {
    this._apiRoot = root;

    this.$promise = promise.then(({headers, body}) => {
      this.$resolved = true;
      this.id = body.id;
      this.type = body.type;
      this.attributes = body.attributes;
      this.link = {};
      this.methods = Model.parseAllowHeaders(headers);

      if (body.links) {
        let relationships = Object.keys(body.links);

        relationships.forEach(relationship => {
          if (['self', 'parent'].includes(relationship)) {
            this.link[relationship] = $partial(Model.get, this._apiRoot + body.links[relationship].href, this._apiRoot);
          } else {
            this.link[relationship] = $partial(Collection.list, this._apiRoot + body.links[relationship].href, this._apiRoot);
          }

          this.link[relationship].url = this._apiRoot + body.links[relationship].href;
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
        headers: meta.headers,
        body: {
          attributes: {},
          type: meta.type,
          links: meta.links
        }
      };

      Object.keys(meta.attributes).forEach(attribute => {
        if (meta.attributes[attribute].primaryKey === true) {
          return;
        }

        response.body.attributes[attribute] = null;
      });

      return response;
    }), root);

    model._meta = meta;

    return model;
  }

  private static get(url: string, root: string): Model {
    return new Model($fetch(url), root);
  }

  private static parseAllowHeaders({ allow = '' }) {
    let allowHeaders = allow.replace(/\s/g, '').split(','),
      out = {};

    $enumKeys(RequestMethods).forEach(method => {
      out[RequestMethods[method]] = allowHeaders.includes(method.toUpperCase());
    });

    return out;
  }
}
