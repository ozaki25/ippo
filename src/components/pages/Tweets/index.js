import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Spinner from 'components/atoms/Spinner';
import FloatingButton from 'components/molecules/FloatingButton';
import TweetEventSummary from 'components/organisms/TweetEventSummary';
import TweetsList from 'components/organisms/TweetList';
import Container from 'components/templates/Container';
import dateFormat from 'utils/dateFormat';
import eventFormat from 'utils/eventFormat';
import paging from 'constants/paging';
import ROUTES from 'constants/routes';
import TWEET_WORD from 'constants/tweetWord';

const TweetContainer = styled.div`
  padding-bottom: 150px;
`;

class Tweets extends React.Component {
  componentDidMount() {
    this.props.data.refetch();
  }

  loadMore = () => {
    const {
      data: {
        tweets: { startId },
        variables: { hashtag },
        fetchMore,
      },
    } = this.props;
    const variables = {
      hashtag,
      limit: paging.tweetsPerPage,
      startId: startId,
    };
    const updateQuery = (prev, { fetchMoreResult }) => ({
      ...prev,
      tweets: {
        ...prev.tweets,
        tweetList: [...prev.tweets.tweetList, ...fetchMoreResult.tweets.tweetList],
        startId: fetchMoreResult.tweets.startId,
      },
    });
    fetchMore({ variables, updateQuery });
  };

  onClickNewTweet = () => {
    const {
      data: { variables },
      history,
    } = this.props;
    history.push(`${ROUTES.NewTweet}?hashtag=${variables.hashtag}`);
  };

  onClickJoin = () => {
    const {
      data: { variables },
      history,
    } = this.props;
    history.push(
      `${ROUTES.NewTweet}?hashtag=${variables.hashtag}&tweet=${TWEET_WORD.JOIN}&type=${
        TWEET_WORD.JOIN_TYPE
      }`,
    );
  };

  onClickLeave = () => {
    const {
      data: { variables },
      history,
    } = this.props;
    history.push(
      `${ROUTES.NewTweet}?hashtag=${variables.hashtag}&tweet=${TWEET_WORD.LEAVE}&type=${
        TWEET_WORD.LEAVE_TYPE
      }`,
    );
  };

  onClickReply = ({ hashtag, tweetid }) =>
    this.props.history.push(`${ROUTES.NewTweet}?hashtag=${hashtag}&parent=${tweetid}`);

  onClickLike = async ({ hashtag, tweetid }) => {
    const {
      addLike,
      authUser: { uid },
      data: { refetch },
    } = this.props;
    const result = await addLike({ variables: { uid, hashtag, tweetid } });
    console.log(result);
    refetch();
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
          <TweetContainer>
            {tweets.event && (
              <TweetEventSummary
                {...eventFormat.internal([tweets.event])[0]}
                onClickJoin={this.onClickJoin}
                onClickLeave={this.onClickLeave}
                joined={tweets.joined}
              />
            )}
            <TweetsList
              loadMore={this.loadMore}
              hasMore={!!tweets.startId}
              items={tweets.tweetList.map(tweet => ({
                ...tweet,
                time: dateFormat.datetimeJa(tweet.time),
              }))}
              onClickReply={this.onClickReply}
              onClickLike={this.onClickLike}
              uid={authUser.uid}
              history={history}
            />
          </TweetContainer>
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
          comments: propTypes.array,
          likes: propTypes.array,
        }),
      ),
      startId: propTypes.string,
      event: propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
        name: propTypes.string,
        timestamp: propTypes.string,
      }),
      joined: propTypes.bool.isRequired,
    }),
    refetch: propTypes.func.isRequired,
    fetchMore: propTypes.func.isRequired,
    variables: propTypes.shape({
      hashtag: propTypes.string.isRequired,
      limit: propTypes.number.isRequired,
    }),
  }),
  addLike: propTypes.func.isRequired,
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
      startId: null,
      event: null,
    },
  },
};

export default Tweets;
