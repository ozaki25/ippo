import React from 'react';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import eventFormat from 'src/utils/eventFormat';

const ExternalEvents = ({
  data: { loading, externalEvents, refetch },
  authUser,
  history,
  firebase,
}) => {
  return (
    <Container title="社外イベント" back authUser={authUser} history={history} firebase={firebase}>
      {loading ? (
        <Spinner />
      ) : externalEvents && externalEvents.length ? (
        <EventCardList events={eventFormat.external(externalEvents)} />
      ) : (
        <Typography>No Contents</Typography>
      )}
    </Container>
  );
};

ExternalEvents.displayName = 'ExternalEvents';

ExternalEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    externalEvents: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        eventUrl: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
    refetch: propTypes.func.isRequired,
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

ExternalEvents.defaultProps = {
  data: {
    loading: false,
    events: [],
  },
};

export default ExternalEvents;
