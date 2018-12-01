import React from 'react';
import { Card as BPCard, Elevation } from '@blueprintjs/core';
import PropTypes from 'prop-types';

const Card = props => <BPCard {...props} elevation={Elevation.TWO} />;

Card.displayName = 'Card';

Card.propTypes = {
  interactive: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  interactive: true,
  children: null,
  onClick: null,
};

export default Card;
