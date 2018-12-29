import React from 'react';
import { snapshot } from 'test/helpers';
import OverlaySpinner from '.';

const props = {
  visible: true,
};

snapshot('OverlaySpinner/nomal', <OverlaySpinner {...props} />);
