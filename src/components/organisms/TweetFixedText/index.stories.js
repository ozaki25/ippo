import React from 'react';
import { storiesOf } from '@storybook/react';
import TweetFixedText from '.';

const stories = storiesOf('organisms/TweetFixedText', module);

const props = {};

stories.add('通常パターン', () => <TweetFixedText {...props} />);
