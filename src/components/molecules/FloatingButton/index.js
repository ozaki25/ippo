import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import RoundButton from 'src/components/atoms/RoundButton';

const StyledRoundButton = styled(RoundButton)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const FloatingButton = ({ icon, onClick }) => (
  <StyledRoundButton icon={icon} onClick={onClick} large />
);

FloatingButton.displayName = 'FloatingButton';

FloatingButton.propTypes = {
  icon: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default FloatingButton;
