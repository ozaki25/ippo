import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputCategoriesAutoSuggest from '.';

const props = {
  handleAddChip: action('add'),
  handleDeleteChip: action('delete'),
  value: [],
};

const stories = storiesOf('organisms/InputCategoriesAutoSuggest', module);

stories.add('未選択', () => <InputCategoriesAutoSuggest {...props} />);

stories.add('1つ選択済み', () => <InputCategoriesAutoSuggest {...props} value={['test']} />);

stories.add('たくさん選択済み', () => (
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
));
