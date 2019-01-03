import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledTweetBody = styled.p`
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const TweetBody = ({ text }) => <StyledTweetBody>{text}</StyledTweetBody>;

TweetBody.displayName = 'TweetBody';

TweetBody.propTypes = {
  text: propTypes.string.isRequired,
};

TweetBody.defaultProps = {};

export default TweetBody;
