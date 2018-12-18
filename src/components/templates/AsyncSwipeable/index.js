import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Spinner } from '@blueprintjs/core';
import propTypes from 'prop-types';

const styles = {
  root: {
    padding: '0 10px',
  },
  slideContainer: {
    padding: '0 5px',
  },
};

const AsyncSwipeable = ({ loading, children }) =>
  loading ? (
    <Spinner />
  ) : (
    <SwipeableViews style={styles.root} slideStyle={styles.slideContainer} enableMouseEvents>
      {children}
    </SwipeableViews>
  );

AsyncSwipeable.displayName = 'AsyncSwipeable';

AsyncSwipeable.propTypes = {
  loading: propTypes.bool.isRequired,
  children: propTypes.node,
};

AsyncSwipeable.defaultProps = {
  children: null,
};

export default AsyncSwipeable;
