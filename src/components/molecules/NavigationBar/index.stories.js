import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import NavigationBar from '.';

const stories = storiesOf('molecules/NavigationBar', module);

stories.add('通常パターン', () => <NavigationBar appName={text('appName', 'タイトル')} />);
