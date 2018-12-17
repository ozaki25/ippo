import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import RoundButton from 'src/components/atoms/RoundButton';

const StyledRoundButton = styled(RoundButton)`
  position: fixed;
  right: 16px;
  bottom: ${({ index }) => `${index * 50 + (index + 1) * 16}px`};
`;

const FloatingButtonList = ({ items }) =>
  items.map(({ icon, onClick }, i) => (
    <StyledRoundButton key={i} icon={icon} onClick={onClick} index={i} xlarge />
  ));

FloatingButtonList.displayName = 'FloatingButtonList';

FloatingButtonList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      icon: propTypes.string.isRequired,
      onClick: propTypes.func.isRequired,
    }),
  ),
};

FloatingButtonList.defaultProps = {
  items: [],
};

export default FloatingButtonList;
