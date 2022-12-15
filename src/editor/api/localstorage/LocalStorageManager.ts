import { Application, Module } from '@sunmao-ui-fork/core';
import { DeleteWidgetIcon } from 'components';
import dayjs from 'dayjs';
import { generateUUID } from 'utils';
export interface WidgetItem {
  id: string;
  created_at: number;
  updated_at: number;
  name: string;
}

export const EmptyAppSchema: Application = {
  kind: 'Application',
  version: 'widget/v1',
  metadata: { name: 'subscan widget', description: 'subscan widget' },
  spec: {
    components: [],
  },
};

export class LocalStorageManager {
  static WidgetsLSKey = 'subscan-widget-schema';
  static AppLSKey = 'subscan-widget-schema';
  static ModulesLSKey = 'subscan-widget-modules';

  getWidgetsFromLS(): WidgetItem[] {
    try {
      const widgetsFromLS = localStorage.getItem(LocalStorageManager.WidgetsLSKey);
      if (widgetsFromLS) {
        return JSON.parse(widgetsFromLS);
      }
      return [];
    } catch (error) {
      console.error('empty widgets in localstorage');
      return [];
    }
  }

  getAppFromLS(id: string): Application {
    try {
      const appFromLS = localStorage.getItem(`widget:${id}`);
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

  newWidgetInLs(widget: Pick<WidgetItem, 'name'>) {
    const widgets = this.getWidgetsFromLS();
    const newWidget: WidgetItem = {
      id: generateUUID(),
      created_at: dayjs().unix(),
      updated_at: dayjs().unix(),
      ...widget
    };
    widgets.push(newWidget);

    localStorage.setItem(LocalStorageManager.WidgetsLSKey, JSON.stringify(widgets));
    this.saveAppInLS(newWidget.id, EmptyAppSchema);
  }

  duplicateWidgetInLs(id: string) {
    const widgets = this.getWidgetsFromLS();
    const index = widgets.findIndex((widget) => widget.id === id);
    const newWidget: WidgetItem = {
      id: generateUUID(),
      created_at: dayjs().unix(),
      updated_at: dayjs().unix(),
      name: `${widgets[index].name} Copy`,
    };

    widgets.push(newWidget);
    localStorage.setItem(LocalStorageManager.WidgetsLSKey, JSON.stringify(widgets));
    this.saveAppInLS(newWidget.id, this.getAppFromLS(id));
  }

  saveWidgetInLs(id: string, app: Application) {
    const widgets = this.getWidgetsFromLS();
    const index = widgets.findIndex((widget) => widget.id === id);
    widgets[index].updated_at = dayjs().unix();

    localStorage.setItem(LocalStorageManager.WidgetsLSKey, JSON.stringify(widgets));
    this.saveAppInLS(id, app);
  }

  updateWidgetNameInLs(id: string, name: string) {
    const widgets = this.getWidgetsFromLS();
    const index = widgets.findIndex((widget) => widget.id === id);
    widgets[index].name = name;

    localStorage.setItem(LocalStorageManager.WidgetsLSKey, JSON.stringify(widgets));
  }

  deleteWidget(id: string) {
    const widgets = this.getWidgetsFromLS();
    const rest = widgets.filter((widget) => id !== widget.id);
    localStorage.setItem(LocalStorageManager.WidgetsLSKey, JSON.stringify(rest));
    localStorage.removeItem(id);
  }

  saveAppInLS(id: string, app: Application) {
    localStorage.setItem(`widget:${id}`, JSON.stringify(app));
  }

  saveModulesInLS(modules: Module[]) {
    localStorage.setItem(LocalStorageManager.ModulesLSKey, JSON.stringify(modules));
  }
}
