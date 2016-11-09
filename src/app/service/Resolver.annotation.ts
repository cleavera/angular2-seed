import {DataStore} from "./DataStore.service";

export function Resolve(resolveBlocks: any): ClassDecorator {
  let dataStore: DataStore;

  return function(Component: any): void {
    const onInit = Component.prototype.ngOnInit || function() {};
    const onDestroy = Component.prototype.ngOnDestroy || function() {};

    Component.prototype.ngOnInit = function () {
      if (!dataStore) {
        if (!this.$injector) {
          throw new Error('The class must expose the Angular 2 injector on the class as the property $injector');
        }

        dataStore = this.$injector.get(DataStore);
      }

      dataStore.getResolvedData(this).then(data => {
        Object.keys(resolveBlocks).forEach(resolveName => {
          dataStore.addData(this, resolveName, Promise.resolve(resolveBlocks[resolveName](data)));
        });

        dataStore.getResolvedData(this).then(resolvedData => {
          const onResolve = Component.prototype.ngOnResolve || function() {};

          onResolve.bind(this)(resolvedData);
        });
      });

      onInit.bind(this)();
    };

    Component.prototype.ngOnDestroy = function () {
      dataStore.cleanData(this);
      onDestroy.bind(this)();
    };
  }
}
