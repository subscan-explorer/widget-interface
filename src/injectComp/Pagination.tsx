import { Pagination as BasePagination } from '@arco-design/web-react';
import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { css, cx } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from 'utils/sunmao-helper';
import { PaginationPropsSpec as BasePaginationPropsSpec } from './types/Pagination';
import { useStateValue } from 'hooks/useStateValue';
import { VERSION } from 'config/constants';

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

export const Pagination = implementRuntimeComponent({
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
