import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import CharIcon from '.';

const stories = storiesOf('atoms/CharIcon', module);

const props = {
  onClick: action('click'),
};

stories.add('英語小文字', () => <CharIcon {...props} name={text('name', 'ozaki25')} />);

stories.add('英語大文字', () => <CharIcon {...props} name={text('name', 'Ozaki')} />);

stories.add('漢字', () => <CharIcon {...props} name={text('name', '尾崎')} />);

stories.add('カタカナ', () => <CharIcon {...props} name={text('name', 'オザキ')} />);

stories.add('英語小文字(small)', () => (
  <CharIcon {...props} name={text('name', 'ozaki25')} small />
));

stories.add('英語大文字(small)', () => <CharIcon {...props} name={text('name', 'Ozaki')} small />);

stories.add('漢字(small)', () => <CharIcon {...props} name={text('name', '尾崎')} small />);

stories.add('カタカナ(small)', () => <CharIcon {...props} name={text('name', 'オザキ')} small />);
