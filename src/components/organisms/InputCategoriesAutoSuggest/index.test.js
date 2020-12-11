import React from 'react';
import { snapshot } from 'src/test/helpers';
import InputCategoriesAutoSuggest from '.';

const props = {
  handleAddChip: jest.fn(),
  handleDeleteChip: jest.fn(),
  label: 'カテゴリ',
  value: [],
};

snapshot(
  'InputCategoriesAutoSuggest/nomal',
  <InputCategoriesAutoSuggest {...props} />,
);

snapshot(
  'InputCategoriesAutoSuggest/one_selected',
  <InputCategoriesAutoSuggest {...props} value={['test']} />,
);

snapshot(
  'InputCategoriesAutoSuggest/many_selected',
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
  />,
);
