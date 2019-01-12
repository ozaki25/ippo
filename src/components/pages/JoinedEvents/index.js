import React from 'react';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import eventFormat from 'src/utils/eventFormat';

const JoinedEvents = ({ data: { loading, joinedEvents }, authUser, history, firebase }) => {
  return (
    <Container title="参加イベント" back authUser={authUser} history={history} firebase={firebase}>
      {loading ? (
        <Spinner />
      ) : joinedEvents && joinedEvents.length ? (
        <EventCardList events={eventFormat.internal(joinedEvents)} history={history} />
      ) : (
        <Typography>No Contents</Typography>
      )}
    </Container>
  );
};

JoinedEvents.displayName = 'JoinedEvents';

JoinedEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    joinedEvents: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
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

JoinedEvents.defaultProps = {
  data: {
    loading: false,
    joinedEvents: [],
  },
};

export default JoinedEvents;
