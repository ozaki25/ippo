import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import propTypes from 'prop-types';

const styles = {
  root: {
    padding: '0 30px',
  },
  slideContainer: {
    padding: '0',
    width: '100%',
  },
};

const ShrinkSwipeable = ({ children }) => (
  <SwipeableViews
    style={styles.root}
    slideStyle={styles.slideContainer}
    hysteresis={0.4}
    enableMouseEvents
  >
    {children}
  </SwipeableViews>
);

ShrinkSwipeable.displayName = 'ShrinkSwipeable';

ShrinkSwipeable.propTypes = {
  children: propTypes.node.isRequired,
};

export default ShrinkSwipeable;
