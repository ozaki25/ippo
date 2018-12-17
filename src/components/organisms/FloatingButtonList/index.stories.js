import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import FloatingButtonList from '.';

const stories = storiesOf('organisms/FloatingButtonList', module);

const item = { icon: text('icon', 'notifications'), onClick: action('onClick') };

const props = count => ({
  items: [...[...Array(count)].map(() => item)],
});

stories.add('ボタン一つ', () => <FloatingButtonList {...props(1)} />);

stories.add('ボタン二つ', () => <FloatingButtonList {...props(2)} />);

stories.add('ボタン三つ', () => <FloatingButtonList {...props(3)} />);
