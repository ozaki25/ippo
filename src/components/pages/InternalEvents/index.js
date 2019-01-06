import React from 'react';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import eventFormat from 'src/utils/eventFormat';

const InternalEvents = ({ data: { loading, internalEvents }, authUser, history, firebase }) => {
  return (
    <Container title="社内イベント" back authUser={authUser} history={history} firebase={firebase}>
      {loading ? (
        <Spinner />
      ) : internalEvents && internalEvents.length ? (
        <EventCardList events={eventFormat.internal(internalEvents)} history={history} />
      ) : (
        <Typography>No Contents</Typography>
      )}
    </Container>
  );
};

InternalEvents.displayName = 'InternalEvents';

InternalEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    internalEvents: propTypes.arrayOf(
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

InternalEvents.defaultProps = {
  data: {
    loading: false,
    internalEvents: [],
  },
};

export default InternalEvents;
