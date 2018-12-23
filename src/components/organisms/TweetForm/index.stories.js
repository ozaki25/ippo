import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TweetForm from '.';

const stories = storiesOf('organisms/TweetForm', module);

stories.add('通常パターン場合', () => <TweetForm onSubmit={action('onSubmit')} />);
