import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { configureViewport } from '@storybook/addon-viewport';
import StoryRouter from 'storybook-react-router';
import 'typeface-roboto';
import '../src/index.css';
import Layout from './Layout';

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(Layout);
addDecorator(StoryRouter());

const req = require.context('../src/components/', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

configureViewport({
  defaultViewport: 'iphone8p',
});
