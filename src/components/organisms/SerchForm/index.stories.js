import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchForm from '.';

const stories = storiesOf('organisms/SearchForm', module);

stories.add('通常パターン', () => <SearchForm search={val => alert(val)} />);
