import React from 'react';
import propTypes from 'prop-types';
import EventCreateForm from 'src/components/organisms/EventCreateForm';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';

const NewEvent = ({ createEvent, authUser, history, firebase }) => {
  return (
    <Container
      title="イベント作成"
      back
      authUser={authUser}
      history={history}
      firebase={firebase}
    >
      <EventCreateForm
        onSubmit={async event => {
          const { uid, displayName } = authUser;
          const result = await createEvent({
            variables: { event: { ...event, uid, name: displayName } },
          });
          history.replace(`${ROUTES.Tweets}?hashtag=${event.hashtag}`);
          return result;
        }}
      />
    </Container>
  );
};

NewEvent.displayName = 'NewEvent';

NewEvent.propTypes = {
  createEvent: propTypes.func.isRequired,
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

NewEvent.defaultProps = {};

export default NewEvent;
