import React from 'react';
import styled from 'styled-components';

const StyledIconImage = styled.img`
  border-radius: 50%;
  float: left;
  height: 48px;
  position: absolute;
  width: 48px;
`;

const IconImage = ({ ...props }) => <StyledIconImage {...props} />;

IconImage.displayName = 'IconImage';

export default IconImage;
