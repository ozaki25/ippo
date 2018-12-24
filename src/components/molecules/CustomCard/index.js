import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Card, Elevation } from '@blueprintjs/core';

const onClick = (url, history) => (history ? history.push(url) : window.open(url, '_blank'));

const StyledCard = styled(Card)`
  min-height: ${({ expand }) => (expand ? '130px' : 'inherit')};
`;

const CustomCard = ({ interactive, expand, url, history, ...rest }) => (
  <StyledCard
    expand={expand ? 1 : 0}
    elevation={Elevation.TWO}
    onClick={() => onClick(url, history)}
    {...rest}
  />
);

CustomCard.displayName = 'CustomCard';

CustomCard.propTypes = {
  expand: propTypes.bool,
  url: propTypes.string.isRequired,
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

CustomCard.defaultProps = {
  expand: false,
  history: null,
};

export default CustomCard;
