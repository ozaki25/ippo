import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import InputCategoriesAutoSuggest from '.';

const stories = storiesOf('organisms/InputCategoriesAutoSuggest', module);

stories.add('通常パターン', () => <InputCategoriesAutoSuggest />);
