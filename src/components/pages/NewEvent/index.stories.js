import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NewEvent from '.';

const stories = storiesOf('pages/NewEvent', module);

stories.add('通常パターン', () => <NewEvent createEvent={action('createEvent')} />);
