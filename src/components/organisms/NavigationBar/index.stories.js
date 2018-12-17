import React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationBar from '.';

const stories = storiesOf('organisms/NavigationBar', module);

stories.add('通常パターン', () => <NavigationBar history={{}} />);
