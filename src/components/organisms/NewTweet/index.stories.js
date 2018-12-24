import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NewTweet from '.';

const stories = storiesOf('organisms/NewTweet', module);

const props = {};

stories.add('通常パターン', () => <NewTweet {...props} />);
