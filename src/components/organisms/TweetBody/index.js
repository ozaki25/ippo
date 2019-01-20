import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import tweetFormat from 'src/utils/tweetFormat';
import ROUTES from 'src/constants/routes';

const StyledTweetBody = styled.div`
  margin: 0 0 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: ${({ bigText }) => (bigText ? '22px' : 'inherit')};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const TweetBody = ({ text, bigText }) => {
  if (typeof text !== 'string')
    return <StyledTweetBody bigText={bigText ? 1 : 0}>{text}</StyledTweetBody>;
  const hashtagList = tweetFormat.detectHashtag(text);
  let tmp = text;
  const result = hashtagList.map((hashtag, i) => {
    const [before, ...after] = tmp.split(hashtag);
    tmp = after.join(hashtag);
    return [
      before,
      <StyledLink
        to={`${ROUTES.Tweets}?hashtag=${hashtag.replace('#', '')}`}
        key={`${hashtag}${i}`}
      >
        {hashtag}
      </StyledLink>,
    ];
  });
  return <StyledTweetBody bigText={bigText ? 1 : 0}>{[...result, tmp].flat()}</StyledTweetBody>;
};

TweetBody.displayName = 'TweetBody';

TweetBody.propTypes = {
  text: propTypes.node.isRequired,
  bigText: propTypes.bool,
};

TweetBody.defaultProps = {
  bigText: false,
};

export default TweetBody;
