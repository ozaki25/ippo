import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCard from 'src/components/organisms/EventCard';
import Container from 'src/components/templates/Container';
import dateFormat from 'src/utils/dateFormat';

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const InternalEvents = ({ data: { loading, internalEvents }, authUser, history, firebase }) => {
  return (
    <Container title="社内イベント" back authUser={authUser} history={history} firebase={firebase}>
      {loading ? (
        <Spinner />
      ) : internalEvents && internalEvents.length ? (
        <>
          {internalEvents.map(event => (
            <EventCardContainer key={event.id}>
              <EventCard
                title={event.title}
                eventUrl=""
                catchMessage={event.catchMessage}
                place={event.place}
                datetime={event.startedAt && `${dateFormat.datetimeJa(event.startedAt)}〜`}
                interactive
                history={history}
              />
            </EventCardContainer>
          ))}
        </>
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
