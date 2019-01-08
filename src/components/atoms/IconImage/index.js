import React from 'react';
import styled from 'styled-components';

const StyledIconImage = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
`;

const IconImage = ({ ...props }) => <StyledIconImage {...props} />;

IconImage.displayName = 'IconImage';

export default IconImage;
