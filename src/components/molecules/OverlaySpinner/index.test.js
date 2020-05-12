import React from 'react';
import { snapshot } from 'src/test/helpers';
import OverlaySpinner from '.';

const props = {
  visible: true,
};

snapshot('OverlaySpinner/nomal', <OverlaySpinner {...props} />);
