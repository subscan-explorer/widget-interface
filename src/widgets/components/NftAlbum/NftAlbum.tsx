import React from 'react';
import { implementRuntimeComponent } from '@subscan/widget-runtime';
import { PRESET_PROPERTY_CATEGORY, VERSION } from 'config/constants';
import { FALLBACK_METADATA, getComponentProps } from 'utils/widget-helper';
import { Type } from '@sinclair/typebox';
import { css } from '@emotion/css';
import { StyledNftBox, StyledLabel, StyledNft, StyledValue, StyledImg } from './styled';
import { LinkExternal } from 'components';
import { StyledModuleBox } from 'ui/common';

const CssBox = css`
  padding: 10px;
`;

const PropsSpec = Type.Object({
  data: Type.Array(Type.Any(), {
    title: 'Data',
    category: PRESET_PROPERTY_CATEGORY.Data,
    weight: 0,
    widget: 'core/v1/expression',
  }),
  image: Type.Object(
    {
      value: Type.String({
        title: 'Image Key',
      }),
    },
    {
      title: 'Image',
      category: PRESET_PROPERTY_CATEGORY.Data,
    }
  ),
  label01: Type.Object(
    {
      title: Type.String({
        title: 'Title',
      }),
      value: Type.String({
        title: 'Key',
      }),
      clickable: Type.Boolean({
        title: 'Clickable',
      }),
      linkPrefix: Type.String({
        title: 'Link Prefix',
        conditions: [
          {
            key: 'clickable',
            value: true,
          },
        ],
      }),
    },
    {
      title: 'Label 01',
      category: PRESET_PROPERTY_CATEGORY.Data,
    }
  ),
  label02: Type.Object(
    {
      title: Type.String({
        title: 'Title',
      }),
      value: Type.String({
        title: 'Key',
      }),
      clickable: Type.Boolean({
        title: 'Clickable',
      }),
      linkPrefix: Type.String({
        title: 'Link Prefix',
        conditions: [
          {
            key: 'clickable',
            value: true,
          },
        ],
      }),
    },
    {
      title: 'Label 02',
      category: PRESET_PROPERTY_CATEGORY.Data,
    }
  ),
});

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'NftAlbum',
    displayName: 'NftAlbum',
    description: 'A batch of NFT',
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
    exampleProperties: {
      data: [
        {
          image:
            'https://cdn.center.app/1/0xED5AF388653567Af2F388E6224dC7C4b3241C544/8481/32726170008014a6594a4659b0cb53c4a4100a25bca36b52e5281634f3d5f470.png',
          tokenId: '8481',
          address: '0x0097b9cfe64455eed479292671a1121f502bc954',
        },
        {
          image:
            'https://cdn.center.app/1/0xED5AF388653567Af2F388E6224dC7C4b3241C544/7201/e3ffc05cf883cf53118af9090ed2cc5cf96a25cd20ccd7f86e1e89a708fdcde3.png',
          tokenId: '7201',
          address: '0xd8dc9335dd30a46574ff58941f2a0dfc2dda29f1',
        },
        {
          image:
            'https://cdn.center.app/1/0xED5AF388653567Af2F388E6224dC7C4b3241C544/4895/469d410e646349390d54ffba9956fe6ffe7d09b3963ae7d540fc8da3e1105b95.png',
          tokenId: '4895',
          address: '0x0097b9cfe64455eed479292671a1121f502bc954',
        },
        {
          image:
            'https://cdn.center.app/1/0xED5AF388653567Af2F388E6224dC7C4b3241C544/7742/d8dd44012ddeec6a7f86b6d86c855a1395a04ea743e80a003e5450a4d92ca6ab.png',
          tokenId: '7742',
          address: '0xd8dc9335dd30a46574ff58941f2a0dfc2dda29f1',
        },
        {
          image:
            'https://cdn.center.app/v2/1/86a3d3756564532c9284999ec461121eb3f544e29adee4076c6ecd3d0f99c00c/6dddf03c9c51891de1dfa7fe32431d1df48a2bcdf53d0be999a203d8c9af2900.png',
          tokenId: '2062',
          address: '0x0097b9cfe64455eed479292671a1121f502bc954',
        },
        {
          image:
            'https://cdn.center.app/1/0xED5AF388653567Af2F388E6224dC7C4b3241C544/5589/bf8e2fe2e5ac4fc9caea926281e0f631fba87a07a34c9a3f44bd0d8e4b115c95.png',
          tokenId: '5589',
          address: '0xd8dc9335dd30a46574ff58941f2a0dfc2dda29f1',
        },
        {
          image:
            'https://cdn.center.app/1/0xED5AF388653567Af2F388E6224dC7C4b3241C544/147/f51e1ef2e5a0282b2fa1178b9c4676182b0c57cfb76ba4abe3a81b30c5654ccd.png',
          tokenId: '147',
          address: '0xd8dc9335dd30a46574ff58941f2a0dfc2dda29f1',
        },
      ],
      image: {
        value: 'image',
      },
      label01: {
        title: 'Token Id',
        value: 'tokenId',
        clickable: true,
        linkPrefix: 'https://app.uniswap.org/#/nfts/asset/0xed5af388653567af2f388e6224dc7c4b3241c544/',
      },
      label02: {
        title: 'Owner',
        value: 'address',
        clickable: true,
        linkPrefix: 'https://etherscan.io/address/',
      },
    },
  },
  spec: {
    properties: PropsSpec,
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(props => {
  const { data, image, label01, label02 } = getComponentProps(props);
  const { customStyle, elementRef } = props;
  // implement your component here
  return (
    <StyledModuleBox className={css(customStyle?.content, CssBox)} ref={elementRef}>
      <StyledNftBox>
        {data?.map(item => {
          return (
            <StyledNft key={`${item[image.value]}${item[label01.value]}${item[label02.value]}`}>
              <StyledImg src={item[image.value]} alt={item[image.value]} />
              <StyledLabel block>
                <span>{label01.title}</span>
                <span>: </span>
                {label01.clickable ? (
                  <StyledValue>
                    <LinkExternal href={`${label01.linkPrefix}${item[label01.value]}`}>
                      {item[label01.value]}
                    </LinkExternal>
                  </StyledValue>
                ) : (
                  <StyledValue>{item[label01.value]}</StyledValue>
                )}
              </StyledLabel>
              <StyledLabel block>
                <span>{label02.title}</span>
                <span>: </span>
                {label02.clickable ? (
                  <StyledValue>
                    <LinkExternal href={`${label02.linkPrefix}${item[label02.value]}`}>
                      {item[label02.value]}
                    </LinkExternal>
                  </StyledValue>
                ) : (
                  <StyledValue>{item[label02.value]}</StyledValue>
                )}
              </StyledLabel>
            </StyledNft>
          );
        })}
      </StyledNftBox>
    </StyledModuleBox>
  );
});
