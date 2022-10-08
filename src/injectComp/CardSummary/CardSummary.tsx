import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui-fork/shared';
import { css, cx } from '@emotion/css';
import { Category, VERSION } from 'config/constants';
import { FALLBACK_METADATA } from 'utils/sunmao-helper';
import { StyledFont12, StyledFont14, StyledModuleBox } from 'ui/common';
import { Icons, IconName } from 'components/Svg/Icons';
import styled from 'styled-components';

type ObjectIconName = {
  [k in IconName]: any
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-row-gap: 20px;
`;

const StyledcColumn = styled.div`
  display: flex;
`;

const StyledValue = styled.div`
  margin-left: 20px;
`;

const CssBox = css`
  padding: 25px;
`;

export const ColumnSpec = Type.Object({
  title: Type.String({
    title: 'Title',
    category: Category.Basic,
  }),
  value: Type.String({
    title: 'Value',
    category: Category.Basic,
  }),
  icon: Type.KeyOf(Type.Object(Icons as ObjectIconName), {
    title: 'Icon Name',
  }),
});

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'cardsummary',
    displayName: 'Card Summary',
    description: 'Card Summary',
    exampleProperties: {
      name: 'barchart',
      spin: false,
    },
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({
      columns: Type.Array(ColumnSpec, {
        title: 'Columns',
        description: '',
        category: Category.Columns,
        widget: 'core/v1/array',
        widgetOptions: {
          displayedKeys: ['title'],
        },
        weight: 0,
      })
    }),
    state: Type.Object({
      isHover: Type.Boolean(),
    }),
    methods: {},
    slots: {
    },
    styleSlots: ['content'],
    events: ['onClick'],
  },
})(({ columns = [], customStyle, callbackMap, elementRef, mergeState }) => {
  return (
    <StyledModuleBox className={cx(css(customStyle?.content), CssBox)} ref={elementRef}>
      <StyledGrid>
        {columns.map((column, index) => {
          const IconComponent = Icons[column.icon];
          return (<StyledcColumn key={`${column.title}${index}`}>
            <IconComponent width="20" />
            <StyledValue>
              <StyledFont12 block fontColor="background02">{column.title}</StyledFont12>
              <StyledFont14 block bold>{column.value}</StyledFont14>
            </StyledValue>
          </StyledcColumn>);
        })}
      </StyledGrid>
    </StyledModuleBox>
  );
});
