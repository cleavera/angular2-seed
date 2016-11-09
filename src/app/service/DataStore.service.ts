import {Injectable} from "@angular/core";

@Injectable()
export class DataStore {
  private dataProto: any;
  public data: Map<any, any>;
  public promises: Promise<any>[];
  public parentPromises: Promise<any>[];

  constructor() {
    this.data = new Map();
    this.promises = [];
    this.parentPromises = [];
    this.dataProto = function() {}
  }

  public addData(instance: any, key: string, data: any): void {
    let storedData: { plain: any, resolved: any } = this.getInstance(instance);

    this.promises.push(Promise.resolve(data));
    storedData.plain[key] = data;

    Promise.resolve(data).then(resolvedData => {
      storedData.resolved[key] = resolvedData;
      this.dataProto[key] = resolvedData;
    });
  }

  public getResolvedData(instance: any, key?: string): Promise<any> {
    return Promise.all(this.parentPromises).then(() => {
      let promise = Promise.all(this.promises).then(() => {
        let storedData: { plain: any, resolved: any } = this.getInstance(instance);

        if (!key) {
          return storedData.resolved;
        }

        return storedData.resolved[key];
      });

      this.parentPromises.push(promise);

      return promise;
    });
  }

  public cleanData(instance): void {
    if (this.data.get(instance)) {
      this.data.delete(instance);
    }
  }

  private getInstance(instance): { plain: any, resolved: any } {
    if (!this.data.get(instance)) {
      this.data.set(instance, {
        plain: Object.create(this.dataProto),
        resolved: Object.create(this.dataProto)
      });
    }

    return this.data.get(instance);
  }
}
