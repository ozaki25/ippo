import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import CharIcon from '.';

export default {
  title: 'atoms/CharIcon',
};

const props = {
  onClick: action('click'),
};

export const 英語小文字 = () => (
  <CharIcon {...props} name={text('name', 'ozaki25')} />
);

export const 英語大文字 = () => (
  <CharIcon {...props} name={text('name', 'Ozaki')} />
);

export const 漢字 = () => <CharIcon {...props} name={text('name', '尾崎')} />;

export const カタカナ = () => (
  <CharIcon {...props} name={text('name', 'オザキ')} />
);

export const 英語小文字_small = () => (
  <CharIcon {...props} name={text('name', 'ozaki25')} small />
);

export const 英語大文字_small = () => (
  <CharIcon {...props} name={text('name', 'Ozaki')} small />
);

export const 漢字_small = () => (
  <CharIcon {...props} name={text('name', '尾崎')} small />
);

export const カタカナ_small = () => (
  <CharIcon {...props} name={text('name', 'オザキ')} small />
);
