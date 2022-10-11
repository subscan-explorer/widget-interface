import { Pagination as BasePagination } from '@arco-design/web-react';
import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { css, cx } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps, StringUnion } from 'utils/sunmao-helper';
import { useStateValue } from 'hooks/useStateValue';
import { VERSION, Category } from 'config/constants';

export const BasePaginationPropsSpec = {
  defaultCurrent: Type.Number({
    title: 'Default Page',
    category: Category.Basic,
  }),
  pageSize: Type.Number({
    title: 'Page Size',
    category: Category.Basic,
  }),
  total: Type.Number({
    title: 'Total',
    category: Category.Basic,
  }),
  updateWhenDefaultValueChanges: Type.Boolean({
    title: 'Update When Default Value Changes',
    category: Category.Basic,
  }),
  disabled: Type.Boolean({
    title: 'Disabled',
    category: Category.Behavior,
  }),
  hideOnSinglePage: Type.Boolean({
    title: 'Hide On Single Page',
    category: Category.Behavior,
  }),
  size: StringUnion(['mini', 'small', 'default', 'large'], {
    title: 'Size',
    category: Category.Style,
  }),
  sizeCanChange: Type.Boolean({
    title: 'Size Can Change',
    category: Category.Behavior,
  }),
  simple: Type.Boolean({
    title: 'Simple',
    category: Category.Behavior,
  }),
  showJumper: Type.Boolean({
    title: 'Show Jumper',
    category: Category.Behavior,
    description: 'Whether to display quick jump',
  }),
  showTotal: Type.Boolean({
    title: 'Show Total',
    category: Category.Behavior,
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
      category: 'Navigation',
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
