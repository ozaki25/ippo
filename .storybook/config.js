import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../src/index.css';

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(StoryRouter());

const req = require.context('../src/components/', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
