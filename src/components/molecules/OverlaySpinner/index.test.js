import React from 'react';
import { snapshot } from 'test/helpers';
import OverlaySpinner from '.';

const props = {
  loading: true,
};

snapshot('OverlaySpinner/nomal', <OverlaySpinner {...props} />);
