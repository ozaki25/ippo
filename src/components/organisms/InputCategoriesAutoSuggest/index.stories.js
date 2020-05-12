import React from 'react';
import { action } from '@storybook/addon-actions';
import InputCategoriesAutoSuggest from '.';

export default {
  title: 'organisms/InputCategoriesAutoSuggest',
};

const props = {
  handleAddChip: action('add'),
  handleDeleteChip: action('delete'),
  label: 'カテゴリ',
  value: [],
};

export const 未選択 = () => <InputCategoriesAutoSuggest {...props} />;

export const _1つ選択済み = () => (
  <InputCategoriesAutoSuggest {...props} value={['test']} />
);

export const たくさん選択済み = () => (
  <InputCategoriesAutoSuggest
    {...props}
    value={[
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      '日本語1',
      '日本語2',
      '日本語3',
      '日本語4',
      '日本語5',
    ]}
  />
);
