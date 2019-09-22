import React from 'react';
import propTypes from 'prop-types';
import Spinner from 'components/atoms/Spinner';
import FloatingButton from 'components/molecules/FloatingButton';
import TweetDetail from 'components/organisms/TweetDetail';
import Container from 'components/templates/Container';
import ROUTES from 'constants/routes';
import dateFormat from 'utils/dateFormat';

class Tweet extends React.Component {
  componentDidMount() {
    this.props.data.refetch();
  }

  onClickNewTweet = () => {
    const {
      history,
      data: { tweet, variables },
    } = this.props;
    history.push(`${ROUTES.NewTweet}?hashtag=${variables.hashtag}&parent=${tweet.id}`);
  };

  onClickReply = () => {
    const {
      history,
      data: { tweet, variables },
    } = this.props;
    history.push(`${ROUTES.NewTweet}?hashtag=${variables.hashtag}&parent=${tweet.id}`);
  };

  onClickLike = async () => {
    const {
      addLike,
      authUser,
      data: { variables, tweet, refetch },
    } = this.props;
    const result = await addLike({
      variables: {
        uid: authUser.uid,
        hashtag: variables.hashtag,
        tweetid: tweet.id,
      },
    });
    console.log(result);
    refetch();
  };

  render() {
    const {
      data: { tweet, loading },
      authUser,
      history,
      firebase,
    } = this.props;
    return (
      <Container
        title="ツイート"
        back
        noPadding
        authUser={authUser}
        history={history}
        firebase={firebase}
      >
        {loading ? (
          <Spinner />
        ) : (
          <TweetDetail
            name={tweet.name}
            text={tweet.text}
            time={dateFormat.datetimeJa(tweet.time)}
            comments={tweet.comments}
            likes={tweet.likes}
            liked={tweet.likes && tweet.likes.includes(authUser.uid)}
            onClickReply={this.onClickReply}
            onClickLike={this.onClickLike}
          />
        )}
        <FloatingButton icon="edit" onClick={this.onClickNewTweet} />
      </Container>
    );
  }
}

Tweet.displayName = 'Tweet';

Tweet.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    tweet: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
      time: propTypes.string.isRequired,
      hashtag: propTypes.string.isRequired,
      comments: propTypes.arrayOf(propTypes.object),
      tweets: propTypes.arrayOf(propTypes.string),
    }),
    refetch: propTypes.func,
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

Tweet.defaultProps = {};

export default Tweet;
