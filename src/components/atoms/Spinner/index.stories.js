import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from '.';

const stories = storiesOf('atoms/Spinner', module);

const props = {};

stories.add('通常パターン', () => <Spinner {...props} />);
