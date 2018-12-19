import React from 'react';
import { storiesOf } from '@storybook/react';
import Signup from '.';

const stories = storiesOf('pages/Signup', module);

const props = {};

stories.add('通常パターン', () => <Signup {...props} />);
