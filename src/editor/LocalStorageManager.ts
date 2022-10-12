import { Application, Module } from '@sunmao-ui-fork/core';

export const EmptyAppSchema: Application = {
  kind: 'Application',
  version: 'example/v1',
  metadata: { name: 'sunmao application', description: 'sunmao empty application' },
  spec: {
    components: [],
  },
};

export class LocalStorageManager {
  static AppLSKey = 'subscan-lowcode-schema';
  static ModulesLSKey = 'subscan-lowcode-modules';

  getAppFromLS(): Application {
    try {
      const appFromLS = localStorage.getItem(LocalStorageManager.AppLSKey);
      if (appFromLS) {
        return JSON.parse(appFromLS);
      }
      return EmptyAppSchema;
    } catch (error) {
      return EmptyAppSchema;
    }
  }

  getModulesFromLS(): Module[] {
    try {
      const modulesFromLS = localStorage.getItem(LocalStorageManager.ModulesLSKey);
      if (modulesFromLS) {
        return JSON.parse(modulesFromLS);
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  saveAppInLS(app: Application) {
    localStorage.setItem(LocalStorageManager.AppLSKey, JSON.stringify(app));
  }

  saveModulesInLS(modules: Module[]) {
    localStorage.setItem(LocalStorageManager.ModulesLSKey, JSON.stringify(modules));
  }
}
