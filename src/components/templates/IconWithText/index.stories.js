import React from 'react';
import { Typography } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import { storiesOf } from '@storybook/react';
import IconWithText from '.';

const stories = storiesOf('templates/IconWithText', module);

const props = {
  children: (
    <>
      <AddRounded fontSize="large" />
      <Typography variant="h4">テスト</Typography>
    </>
  ),
};

stories.add('通常パターン', () => <IconWithText {...props} />);
