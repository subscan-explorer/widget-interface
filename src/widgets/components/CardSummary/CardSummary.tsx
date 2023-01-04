import { implementRuntimeComponent } from '@subscan/widget-runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@subscan/widget-shared';
import { css, cx } from '@emotion/css';
import { COMPONENTS_CATEGORY, VERSION } from 'config/constants';
import { FALLBACK_METADATA } from 'utils/widget-helper';
import { StyledFont12, StyledFont14, StyledModuleBox } from 'ui/common';
import { Icons, IconName } from 'components/Svg/Icons';
import styled from 'styled-components';

type ObjectIconName = {
  [k in IconName]: any;
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-row-gap: 20px;
`;

const StyledColumn = styled.div`
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
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  value: Type.String({
    title: 'Value',
    category: PRESET_PROPERTY_CATEGORY.Basic,
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
      columns: [
        {
          title: 'Finalized Block',
          value: '145,431',
          icon: 'barchart',
        },
        {
          title: 'Signed Extrinsics',
          value: '54,541,324',
          icon: 'barchart',
        },
        {
          title: 'Signed Extrinsics',
          value: '54,541,324',
          icon: 'barchart',
        },
        {
          title: 'Signed Extrinsics',
          value: '54,541,324',
          icon: 'barchart',
        },
        {
          title: 'Signed Extrinsics',
          value: '54,541,324',
          icon: 'barchart',
        },
      ],
    },
    annotations: {
      category: COMPONENTS_CATEGORY.Display,
    },
  },
  spec: {
    properties: Type.Object({
      columns: Type.Array(ColumnSpec, {
        title: 'Columns',
        description: '',
        category: PRESET_PROPERTY_CATEGORY.Columns,
        widget: 'core/v1/array',
        widgetOptions: {
          displayedKeys: ['title'],
        },
        weight: 0,
      }),
    }),
    state: Type.Object({
      isHover: Type.Boolean(),
    }),
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: ['onClick'],
  },
})(({ columns = [], customStyle, callbackMap, elementRef, mergeState }) => {
  return (
    <StyledModuleBox className={cx(css(customStyle?.content), CssBox)} ref={elementRef}>
      <StyledGrid>
        {columns.map((column, index) => {
          const IconComponent = Icons[column.icon];
          return (
            <StyledColumn key={`${column.title}${index}`}>
              <IconComponent width="20" />
              <StyledValue>
                <StyledFont12 block fontColor="background02">
                  {column.title}
                </StyledFont12>
                <StyledFont14 block bold>
                  {column.value}
                </StyledFont14>
              </StyledValue>
            </StyledColumn>
          );
        })}
      </StyledGrid>
    </StyledModuleBox>
  );
});
