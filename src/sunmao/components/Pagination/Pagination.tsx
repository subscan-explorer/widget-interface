import { Pagination as BasePagination } from '@arco-design/web-react';
import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { css, cx } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps, StringUnion } from 'utils/sunmao-helper';
import { useStateValue } from 'hooks/useStateValue';
import { VERSION, PRESET_PROPERTY_CATEGORY, COMPONENTS_CATEGORY } from 'config/constants';
import './index.css';

export const BasePaginationPropsSpec = {
  defaultCurrent: Type.Number({
    title: 'Default Page',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  pageSize: Type.Number({
    title: 'Page Size',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  total: Type.Number({
    title: 'Total',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  updateWhenDefaultValueChanges: Type.Boolean({
    title: 'Update When Default Value Changes',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  disabled: Type.Boolean({
    title: 'Disabled',
    category: PRESET_PROPERTY_CATEGORY.Behavior,
  }),
  hideOnSinglePage: Type.Boolean({
    title: 'Hide On Single Page',
    category: PRESET_PROPERTY_CATEGORY.Behavior,
  }),
  size: StringUnion(['mini', 'small', 'default', 'large'], {
    title: 'Size',
    category: PRESET_PROPERTY_CATEGORY.Style,
  }),
  sizeCanChange: Type.Boolean({
    title: 'Size Can Change',
    category: PRESET_PROPERTY_CATEGORY.Behavior,
  }),
  simple: Type.Boolean({
    title: 'Simple',
    category: PRESET_PROPERTY_CATEGORY.Behavior,
  }),
  showJumper: Type.Boolean({
    title: 'Show Jumper',
    category: PRESET_PROPERTY_CATEGORY.Behavior,
    description: 'Whether to display quick jump',
  }),
  showTotal: Type.Boolean({
    title: 'Show Total',
    category: PRESET_PROPERTY_CATEGORY.Behavior,
  }),
};

const PaginationPropsSpec = Type.Object(BasePaginationPropsSpec);

const PaginationStateSpec = Type.Object({
  currentPage: Type.Number(),
});

const exampleProperties: Static<typeof PaginationPropsSpec> = {
  pageSize: 10,
  total: 300,
  defaultCurrent: 3,
  disabled: false,
  hideOnSinglePage: true,
  size: 'default',
  sizeCanChange: false,
  simple: false,
  showJumper: false,
  showTotal: false,
  updateWhenDefaultValueChanges: false,
};

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'pagination',
    displayName: 'Pagination',
    exampleProperties,
    annotations: {
      category: COMPONENTS_CATEGORY.Display
    },
  },
  spec: {
    properties: PaginationPropsSpec,
    state: PaginationStateSpec,
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: ['onChange'],
  },
})(props => {
  const { defaultCurrent, updateWhenDefaultValueChanges, ...cProps } =
    getComponentProps(props);
  const { elementRef, customStyle, mergeState, callbackMap } = props;

  const [current, setCurrent] = useStateValue(
    defaultCurrent || 0,
    mergeState,
    updateWhenDefaultValueChanges,
    'currentPage'
  );

  if (cProps.sizeCanChange) {
    Reflect.deleteProperty(cProps, 'pageSize');
  }

  const handleChange = (pageNum: number) => {
    setCurrent(pageNum);
    mergeState({ currentPage: pageNum });
    callbackMap?.onChange?.();
  };

  return (
    <BasePagination
      ref={elementRef}
      className={cx(css(customStyle?.content))}
      {...cProps}
      current={current}
      onChange={handleChange}
    />
  );
});
