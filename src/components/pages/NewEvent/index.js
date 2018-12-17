import React from 'react';
import propTypes from 'prop-types';
import EventCreateForm from 'src/components/organisms/EventCreateForm';
import Container from 'src/components/templates/Container';

const NewEvent = ({ createEvent, history }) => {
  return (
    <Container>
      <EventCreateForm
        onSubmit={event => {
          history.push('/events');
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
