import React from 'react';
import { storiesOf } from '@storybook/react';
import TabMenu from '.';

const stories = storiesOf('molecules/TabMenu', module);

const item = i => ({
  id: String(i),
  title: String(i),
  Component: () => <p>{String(i)}</p>,
});

const props = times => ({
  items: [...Array(times)].map((_, i) => item(i)),
});

stories.add('タブが1の場合', () => <TabMenu {...props(1)} />);

stories.add('タブが2の場合', () => <TabMenu {...props(2)} />);

stories.add('タブが3つ場合', () => <TabMenu {...props(3)} />);

stories.add('タブが4つ場合', () => <TabMenu {...props(4)} />);
