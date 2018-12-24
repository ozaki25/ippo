import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import OverlaySpinner from '.';

const stories = storiesOf('molecules/OverlaySpinner', module);

stories.add('通常パターン', () => <OverlaySpinner loading={boolean('loading', true)} />);
