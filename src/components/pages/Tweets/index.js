import React from 'react';
import { Spinner } from '@blueprintjs/core';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';
import TweetsList from 'src/components/organisms/TweetList';
import FloatingButton from 'src/components/molecules/FloatingButton';
import dateFormat from 'src/utils/dateFormat';
import paging from 'src/constants/paging';
import ROUTES from 'src/constants/routes';

class Tweets extends React.Component {
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

  onClickNewTweet = () => {
    const {
      data: { variables },
      history,
    } = this.props;
    history.push(`${ROUTES.NewTweet}?hashtag=${variables.hashtag}`);
  };

  render() {
    const {
      data: {
        tweets,
        loading,
        variables: { hashtag },
      },
      authUser,
      history,
      firebase,
    } = this.props;
    return (
      <Container
        title={`#${hashtag}`}
        back
        noPadding
        authUser={authUser}
        history={history}
        firebase={firebase}
      >
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
        <FloatingButton icon="edit" onClick={this.onClickNewTweet} />
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
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

Tweets.defaultProps = {
  data: {
    tweets: {
      tweetList: [],
    },
  },
};

export default Tweets;
