import React from 'react';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import FloatingButton from 'src/components/molecules/FloatingButton';
import TweetDetail from 'src/components/organisms/TweetDetail';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';
import dateFormat from 'src/utils/dateFormat';

class Tweet extends React.Component {
  onClickNewTweet = () => {
    const {
      data: { variables },
      history,
    } = this.props;
    history.push(`${ROUTES.NewTweet}?hashtag=${variables.hashtag}`);
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
            time={dateFormat.datetimeJa(tweet.timestamp)}
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
    }),
    refetch: propTypes.func.isRequired,
    fetchMore: propTypes.func.isRequired,
    variables: propTypes.shape({
      hashtag: propTypes.string.isRequired,
      limit: propTypes.number.isRequired,
    }),
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

Tweet.defaultProps = {};

export default Tweet;
