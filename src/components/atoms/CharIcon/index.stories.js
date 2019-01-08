import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CharIcon from '.';

const stories = storiesOf('atoms/CharIcon', module);

const props = {};

stories.add('英語小文字', () => <CharIcon {...props} name={text('name', 'ozaki25')} />);

stories.add('英語大文字', () => <CharIcon {...props} name={text('name', 'Ozaki')} />);

stories.add('漢字', () => <CharIcon {...props} name={text('name', '尾崎')} />);

stories.add('カタカナ', () => <CharIcon {...props} name={text('name', 'オザキ')} />);
