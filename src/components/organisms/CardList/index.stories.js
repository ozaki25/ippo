import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Text } from '@blueprintjs/core';
import CardList from '.';

const stories = storiesOf('organisms/CardList', module);

stories.add('通常パターン', () => (
  <CardList
    items={[
      { id: '1', body: '１つ目のカード', interactive: true, onClick: action('click1') },
      { id: '2', body: '2つ目のカード', interactive: false },
      {
        id: '3',
        body: '3つ目のカードです。文章を長めにしたらどうなるか見たいので長文です。',
        interactive: true,
        onClick: action('click3'),
      },
      {
        id: '4',
        body: (
          <>
            <h3 className="bp3-heading">4つ目のカード</h3>
            <Text>カードの中に文章を書いています</Text>
          </>
        ),
        interactive: true,
        onClick: action('click4'),
      },
    ]}
  />
));
