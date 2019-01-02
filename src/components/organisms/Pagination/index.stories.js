import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '.';

const stories = storiesOf('organisms/Pagination', module);

stories.add('10ページ中1ページ目', () => (
  <Pagination current={1} total={10} onClick={action('click')} />
));

stories.add('10ページ中5ページ目', () => (
  <Pagination current={5} total={10} onClick={action('click')} />
));

stories.add('10ページ中10ページ目', () => (
  <Pagination current={10} total={10} onClick={action('click')} />
));
