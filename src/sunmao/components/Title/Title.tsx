import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui-fork/shared';
import { css, cx } from '@emotion/css';
import { VERSION } from 'config/constants';
import { StyledFont14 } from 'ui/common';

const flexStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  * + span {
    margin-left: 5px; 
  }
`;

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    name: 'title',
    displayName: 'Title',
    description: 'Can be placed in front of modules and paragraphs as headings.',
    exampleProperties: {
      text: 'Subscan Title',
    },
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({
      text: Type.String({ title: 'Text' }),
    }),
    state: Type.Object({
      isHover: Type.Boolean(),
    }),
    methods: {},
    slots: {
      prefix: {
        slotProps: Type.Object({}),
      },
    },
    styleSlots: ['content'],
    events: ['onClick'],
  },
})(({ text, elementRef, customStyle, callbackMap, slotsElements, mergeState }) => {
  const onMouseEnter = () => {
    mergeState({
      isHover: true,
    });
  };
  const onMouseLeave = () => {
    mergeState({
      isHover: false,
    });
  };
  const onClick = () => {
    callbackMap?.onClick?.();
  };

  return (
    <div className={cx(css(customStyle?.content), flexStyle)}
      ref={elementRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}>
      {slotsElements.prefix ? slotsElements.prefix({}) : null}
      <StyledFont14 bold >
        {text}
      </StyledFont14>
    </div>
  );
});
