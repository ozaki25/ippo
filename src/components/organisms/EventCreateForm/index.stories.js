import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import EventCreateForm from '.';

const stories = storiesOf('organisms/EventCreateForm', module);

stories.add('通常パターン場合', () => <EventCreateForm />);
