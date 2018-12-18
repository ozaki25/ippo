import React from 'react';
import { Spinner } from '@blueprintjs/core';
import propTypes from 'prop-types';
import ShrinkSwipeable from 'src/components/templates/ShrinkSwipeable';

const AsyncSwipeable = ({ loading, children }) =>
  loading ? <Spinner /> : <ShrinkSwipeable>{children}</ShrinkSwipeable>;

AsyncSwipeable.displayName = 'AsyncSwipeable';

AsyncSwipeable.propTypes = {
  loading: propTypes.bool.isRequired,
  children: propTypes.node,
};

AsyncSwipeable.defaultProps = {
  children: null,
};

export default AsyncSwipeable;
