import React from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from '.';

export default {
  title: 'molecules/Pagination',
};

export const _10ページ中1ページ目 = () => (
  <Pagination current={1} total={10} onClick={action('click')} />
);

export const _10ページ中5ページ目 = () => (
  <Pagination current={5} total={10} onClick={action('click')} />
);

export const _10ページ中10ページ目 = () => (
  <Pagination current={10} total={10} onClick={action('click')} />
);
