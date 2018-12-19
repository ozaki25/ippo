import React from 'react';
import { storiesOf } from '@storybook/react';
import Signin from '.';

const stories = storiesOf('pages/Signin', module);

const props = {};

stories.add('通常パターン', () => <Signin {...props} />);
