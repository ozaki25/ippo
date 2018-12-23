import React from 'react';
import { Spinner } from '@blueprintjs/core';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';
import TweetsList from 'src/components/organisms/TweetList';
import FloatingButtonList from 'src/components/organisms/FloatingButtonList';
import NewTweet from 'src/hoc/WithNewTweet';
import dateFormat from 'src/utils/dateFormat';

class Tweets extends React.Component {
  state = { isOpenNewTweet: false };

  toggleNewTweet = () =>
    this.setState(prevState => ({ isOpenNewTweet: !prevState.isOpenNewTweet }));

  render() {
    const {
      data: { tweets = [], loading, variables, refetch },
    } = this.props;
    return (
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
        <FloatingButtonList items={[{ icon: 'edit', onClick: this.toggleNewTweet }]} />
        <NewTweet
          isOpen={this.state.isOpenNewTweet}
          onClose={this.toggleNewTweet}
          hashtag={variables.hashtag}
          refetch={refetch}
        />
      </Container>
    );
  }
}
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
  refetch: propTypes.func,
};

Tweets.defaultProps = {
  data: {
    tweets: [],
  },
  refetch: null,
};

export default Tweets;
