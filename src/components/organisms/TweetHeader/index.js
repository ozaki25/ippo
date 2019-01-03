import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TweetHeaderTime = styled.small`
  &:before {
    content: '\00b7';
  }
`;

const TweetHeader = ({ name, time }) => (
  <>
    <strong>{name}</strong>
    <TweetHeaderTime>{time}</TweetHeaderTime>
  </>
);

TweetHeader.displayName = 'TweetHeader';

TweetHeader.propTypes = {
  name: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
};

TweetHeader.defaultProps = {};

export default TweetHeader;
