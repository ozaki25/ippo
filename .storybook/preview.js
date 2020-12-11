import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import StoryRouter from 'storybook-react-router';
import Layout from './Layout';

addDecorator(Layout);
addDecorator(StoryRouter());

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex',
  },
});
