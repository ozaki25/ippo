import React from 'react';
import { Spinner } from '@blueprintjs/core';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';
import TweetsList from 'src/components/organisms/TweetList';
import FloatingButtonList from 'src/components/organisms/FloatingButtonList';
import NewTweet from 'src/hoc/WithNewTweet';
import dateFormat from 'src/utils/dateFormat';
import paging from 'src/constants/paging';

class Tweets extends React.Component {
  state = { isOpenNewTweet: false };

  loadMore = () => {
    const {
      data: {
        tweets: { startId },
        variables,
        fetchMore,
      },
    } = this.props;
    fetchMore({
      variables: {
        hashtag: variables.hashtag,
        limit: paging.tweetsPerPage,
        startId: startId,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          ...prev,
          tweets: {
            ...prev.tweets,
            tweetList: [...prev.tweets.tweetList, ...fetchMoreResult.tweets.tweetList],
            startId: fetchMoreResult.tweets.startId,
          },
        };
      },
    });
  };

  toggleNewTweet = () =>
    this.setState(prevState => ({ isOpenNewTweet: !prevState.isOpenNewTweet }));

  render() {
    const {
      data: { tweets, loading, variables, refetch },
      authUser,
    } = this.props;
    return (
      <Container noPadding authUser={authUser}>
        {loading ? (
          <Spinner />
        ) : (
          <TweetsList
            loadMore={this.loadMore}
            hasMore={!!tweets.startId}
            items={tweets.tweetList.map(tweet => ({
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
    tweets: propTypes.shape({
      tweetList: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string.isRequired,
          name: propTypes.string.isRequired,
          text: propTypes.string.isRequired,
          time: propTypes.string.isRequired,
          hashtag: propTypes.string.isRequired,
        }),
      ),
      startId: propTypes.string.isRequired,
    }),
    refetch: propTypes.func.isRequired,
    fetchMore: propTypes.func.isRequired,
  }),
};

Tweets.defaultProps = {
  data: {
    tweets: {
      tweetList: [],
    },
  },
};

export default Tweets;
