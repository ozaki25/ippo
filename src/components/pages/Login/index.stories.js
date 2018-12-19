import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from '.';

const stories = storiesOf('pages/Login', module);

const props = {
};

stories.add('通常パターン', () => <Login {...props} />);
