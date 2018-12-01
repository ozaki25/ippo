import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Text } from '@blueprintjs/core';
import Card from '.';

const interactive = () => boolean('interactive', true);
const onClick = action('click');

const stories = storiesOf('molecules/Card', module);

stories.add('文字列のみ入れた場合', () => (
  <Card interactive={interactive()} onClick={onClick}>
    {text('children', 'カードの中に文字列だけ入れた場合')}
  </Card>
));

stories.add('コンポーネントを入れた場合', () => (
  <Card interactive={interactive()} onClick={onClick}>
    <h3 className="bp3-heading">タイトル</h3>
    <Text>カードの中に文章を書いています</Text>
  </Card>
));
