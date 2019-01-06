import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PinIcon from '.';

const stories = storiesOf('atoms/PinIcon', module);

const props = {};

stories.add('通常パターン', () => <PinIcon {...props} />);
