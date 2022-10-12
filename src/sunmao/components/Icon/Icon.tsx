import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui-fork/shared';
import { css } from '@emotion/css';
import { VERSION } from 'config/constants';
import { FALLBACK_METADATA } from 'utils/sunmao-helper';
import { Icons, IconName } from 'components/Svg/Icons';

type ObjectIconName = {
  [k in IconName]: any
}

const IconPropsSpec = Type.Object({
  name: Type.KeyOf(Type.Object(Icons as ObjectIconName), {
    title: 'Name',
  }),
  spin: Type.Boolean({
    title: 'Spin',
  }),
});

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'icon',
    displayName: 'Icon',
    description: 'Awesome Icon.',
    exampleProperties: {
      name: 'barchart',
      spin: false,
    },
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: IconPropsSpec,
    state: Type.Object({
      isHover: Type.Boolean(),
    }),
    methods: {},
    slots: {
    },
    styleSlots: ['content'],
    events: ['onClick'],
  },
})(({ name = 'barchart', spin, customStyle, callbackMap, mergeState }) => {
  const Component = Icons[name];
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

  if (!name) {
    return null;
  }

  return (
    <Component className={css(customStyle?.content)} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} spin={spin} />
  );
});
