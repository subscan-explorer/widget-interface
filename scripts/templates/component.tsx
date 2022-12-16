import { implementRuntimeComponent } from '@subscan/widget-runtime';
import { PRESET_PROPERTY_CATEGORY } from 'config/constants';
import { FALLBACK_METADATA, getComponentProps } from 'utils/sunmao-helper';
import { Type } from '@sinclair/typebox';
import { css } from '@emotion/css';
import React from 'react';

export default implementRuntimeComponent({
  version: 'custom/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'componentName',
    displayName: 'componentDisplayName',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {},
    exampleSize: [1, 1],
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({}),
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(props => {
  // const { data } = getComponentProps(props);
  const { customStyle } = props;

  // implement your component here
  return <div className={css(customStyle?.content)} />;
});
