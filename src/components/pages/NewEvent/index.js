import React from 'react';
import propTypes from 'prop-types';
import EventCreateForm from 'src/components/organisms/EventCreateForm';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';

const NewEvent = ({ createEvent, history }) => {
  return (
    <Container>
      <EventCreateForm
        onSubmit={event => {
          history.push(`${ROUTES.Tweets}?hashtag=${event.hashtag}`);
          return createEvent({ variables: { event } });
        }}
      />
    </Container>
  );
};

NewEvent.displayName = 'NewEvent';

NewEvent.propTypes = {
  createEvent: propTypes.func,
};

NewEvent.defaultProps = {};

export default NewEvent;
