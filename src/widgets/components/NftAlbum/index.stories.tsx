import React from 'react';
import { Application } from '@subscan/widget-core';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preview from 'preview';
import { initChainStyles } from 'config/stylebook';

const AppOptions: Application = {
  version: 'widget/v1',
  kind: 'Application',
  metadata: {
    name: 'subscan widget',
  },
  spec: {
    components: [
      {
        id: 'NftAlbum2',
        type: 'core/v1/NftAlbum',
        properties: {
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
        traits: [],
      },
    ],
  },
};

export default {
  title: 'Subscan Lib/NftAlbum',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = args => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
  ...initChainStyles,
};
