import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledIconWithText = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: flex-start;
  vertical-align: middle;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
`;
const IconWithText = ({ fullWidth, ...props }) => (
  <StyledIconWithText fullWidth={fullWidth ? 1 : 0} {...props} />
);

IconWithText.displayName = 'IconWithText';

IconWithText.propTypes = {
  fullWidth: propTypes.bool,
};

IconWithText.defaultProps = {
  fullWidth: false,
};

export default IconWithText;
