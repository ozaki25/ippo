import React from 'react';
import { Typography } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import IconWithText from '.';

export default {
  title: 'templates/IconWithText',
};

const props = {
  children: (
    <>
      <AddRounded fontSize="large" />
      <Typography variant="h4">テスト</Typography>
    </>
  ),
};

export const 通常パターン = () => <IconWithText {...props} />;
