import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import tweetFormat from 'src/utils/tweetFormat';
import ROUTES from 'src/constants/routes';

const StyledTweetBody = styled.div`
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const TweetBody = ({ text }) => {
  if (typeof text !== 'string') return <StyledTweetBody>{text}</StyledTweetBody>;
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
  return <StyledTweetBody>{[...result, tmp].flat()}</StyledTweetBody>;
};

TweetBody.displayName = 'TweetBody';

TweetBody.propTypes = {
  text: propTypes.node.isRequired,
};

TweetBody.defaultProps = {};

export default TweetBody;
