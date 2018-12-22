import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GoogleButton from '.';

const stories = storiesOf('atoms/GoogleButton', module);

stories.add('通常パターン', () => <GoogleButton onClick={action('click')} />);
