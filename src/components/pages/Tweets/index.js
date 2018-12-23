import React from 'react';
import { Spinner } from '@blueprintjs/core';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';
import TweetsList from 'src/components/organisms/TweetList';
import dateFormat from 'src/utils/dateFormat';

const Tweets = ({ data: { tweets = [], loading } }) => (
  <Container noPadding>
    {loading ? (
      <Spinner />
    ) : (
      <TweetsList
        items={tweets.map(tweet => ({
          ...tweet,
          time: dateFormat.datetimeJa(new Date(tweet.time)),
        }))}
      />
    )}
  </Container>
);

Tweets.displayName = 'Tweets';

Tweets.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    tweets: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        text: propTypes.string.isRequired,
        time: propTypes.string.isRequired,
        hashtag: propTypes.string.isRequired,
      }),
    ),
  }),
};

Tweets.defaultProps = {
  data: {
    tweets: [],
  },
};

export default Tweets;
