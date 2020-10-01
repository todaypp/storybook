import React from 'react';

import Sidebar from './Sidebar';
import { standardData as standardHeaderData } from './Heading.stories';
import { mockDataset } from './mockdata';
import { RefType } from './types';
import { DEFAULT_REF_ID } from './utils';

export default {
  component: Sidebar,
  title: 'UI/Sidebar/Sidebar',
  excludeStories: /.*Data$/,
};

const { menu } = standardHeaderData;
const stories = mockDataset.withRoot;
const refId = DEFAULT_REF_ID;
const storyId = '1-12-121';

export const simpleData = { menu, stories, storyId };
export const loadingData = { menu, stories: {} };

const refs: Record<string, RefType> = {
  optimized: {
    id: 'optimized',
    title: 'This is a ref',
    url: 'https://example.com',
    ready: false,
    type: 'lazy',
    stories,
  },
};

export const Simple = () => (
  <Sidebar
    storiesConfigured
    menu={menu}
    stories={stories}
    storyId={storyId}
    refId={refId}
    refs={{}}
  />
);

export const Loading = () => (
  <Sidebar
    storiesConfigured={false}
    menu={menu}
    stories={{}}
    storyId={storyId}
    refId={refId}
    refs={{}}
  />
);

export const Empty = () => (
  <Sidebar storiesConfigured menu={menu} stories={{}} storyId={storyId} refId={refId} refs={{}} />
);

export const WithRefs = () => (
  <Sidebar
    storiesConfigured
    menu={menu}
    stories={stories}
    storyId={storyId}
    refId={refId}
    refs={refs}
  />
);
