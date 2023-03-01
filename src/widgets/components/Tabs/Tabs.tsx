import { useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';
import { Tabs as BaseTabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import { Type } from '@sinclair/typebox';
import { implementRuntimeComponent } from '@subscan/widget-runtime';
import { PRESET_PROPERTY_CATEGORY, COMPONENTS_CATEGORY, VERSION } from 'config/constants';
import { StyledFont14 } from 'ui/common';
import styled, { useTheme } from 'styled-components';

const StateSpec = Type.Object({
  selectedTabIndex: Type.Number(),
});

const PropsSpec = Type.Object({
  tabNames: Type.Array(Type.String(), {
    title: 'Tab Names',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  initialSelectedTabIndex: Type.Number({
    title: 'Default Selected Tab Index',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
});

const StyledTabsLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background04};
`;

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    name: 'tabs',
    displayName: 'Tabs',
    description: 'chakra-ui tabs',
    exampleProperties: {
      tabNames: ['Tab1', 'Tab2'],
      initialSelectedTabIndex: 0,
    },
    annotations: {
      category: COMPONENTS_CATEGORY.Display,
    },
  },
  spec: {
    properties: PropsSpec,
    state: StateSpec,
    methods: {},
    // tab slot is dynamic
    slots: {
      content: {
        slotProps: Type.Object({
          tabIndex: Type.Number(),
        }),
      },
    },
    styleSlots: ['tabItem', 'tabContent'],
    events: [],
  },
})(props => {
  const { tabNames, mergeState, initialSelectedTabIndex, customStyle, slotsElements, elementRef } = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState(initialSelectedTabIndex ?? 0);
  const theme = useTheme();

  useEffect(() => {
    mergeState({ selectedTabIndex });
  }, [mergeState, selectedTabIndex]);

  const CSSTabBorderActive = css`
    border-bottom: 4px;
    border-color: ${theme.chain.color};
    border-style: solid;
  `;

  const CSSTabBorderNormal = css`
    border-bottom: 4px;
    border-color: ${theme.colors.contrast};
    border-style: solid;
  `;

  const placeholder = <Text color="gray">Slot content is empty.Please drag component to this slot.</Text>;
  return (
    <BaseTabs defaultIndex={initialSelectedTabIndex} onChange={idx => setSelectedTabIndex(idx)} variant="unstyled">
      <TabList ref={elementRef}>
        {tabNames.map((name, idx) => (
          <Tab
            key={idx}
            _selected={{ bg: theme.colors.contrast }}
            className={cx(
              css`
                ${customStyle?.tabItem}
              `,
              selectedTabIndex === idx ? CSSTabBorderActive : CSSTabBorderNormal
            )}
          >
            <StyledFont14 style={{ color: selectedTabIndex === idx ? theme.chain.color : theme.colors.primary }} bold>
              {name}
            </StyledFont14>
          </Tab>
        ))}
      </TabList>
      <StyledTabsLine />
      <TabPanels>
        {tabNames.map((_, idx) => {
          return (
            <TabPanel
              key={idx}
              className={css`
                ${customStyle?.tabContent}
              `}
            >
              {slotsElements?.content?.({ tabIndex: idx }, placeholder, `content_${idx}`)}
            </TabPanel>
          );
        })}
      </TabPanels>
    </BaseTabs>
  );
});
