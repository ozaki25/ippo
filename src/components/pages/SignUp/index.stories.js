import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUp from '.';

const stories = storiesOf('pages/SignUp', module);

const props = {};

stories.add('通常パターン', () => <SignUp {...props} />);
