import React from 'react';
import IconImage from '.';

export default {
  title: 'atoms/IconImage',
};

const props = {
  src: '/icon.png',
};

export const 通常パターン = () => <IconImage {...props} />;
