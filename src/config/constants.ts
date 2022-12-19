import { type Application } from '@subscan/widget-core';

export const enum PRESET_PROPERTY_CATEGORY {
  Data = 'Data',
  Columns = 'Columns',
  Basic = 'Basic',
  Behavior = 'Behavior',
  Layout = 'Layout',
  Style = 'Style',
  Display = 'Display'
}

export const enum COMPONENTS_CATEGORY {
  General = 'General',
  Display = 'Display'
}

export const enum VERSION {
  Core = 'core/v1'
}


export const DEFAULT_APP_TEMPLATE = {
  "kind": "Application",
  "version": "widget/v1",
  "metadata": { name: 'subscan widget', description: 'subscan widget' },
  "spec": { "components": [] }
};
