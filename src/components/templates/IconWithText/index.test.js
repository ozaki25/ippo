import React from 'react';
import { snapshot } from 'test/helpers';
import { Typography } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import IconWithText from '.';

const props = {
  children: (
    <>
      <AddRounded fontSize="large" />
      <Typography variant="h4">テスト</Typography>
    </>
  ),
};

snapshot('IconWithText/nomal', <IconWithText {...props} />);
