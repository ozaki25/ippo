import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Spinner } from '@blueprintjs/core';
import propTypes from 'prop-types';

const AsyncSwipeable = ({ loading, children }) =>
  loading ? <Spinner /> : <SwipeableViews enableMouseEvents>{children}</SwipeableViews>;

AsyncSwipeable.displayName = 'AsyncSwipeable';

AsyncSwipeable.propTypes = {
  loading: propTypes.bool.isRequired,
  children: propTypes.arrayOf(propTypes.element),
};

AsyncSwipeable.defaultProps = {
  children: [],
};

export default AsyncSwipeable;
