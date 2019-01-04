import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCard from 'src/components/organisms/EventCard';
import Pagination from 'src/components/organisms/Pagination';
import Container from 'src/components/templates/Container';
import eventFormat from 'src/utils/eventFormat';
import pagination from 'src/utils/pagination';
import paging from 'src/constants/paging';

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const PaginationContainer = styled.div`
  text-align: center;
`;

const ExternalEvents = ({ data: { loading, connpass, refetch }, authUser, history, firebase }) => {
  const { events, results_available, results_start } = connpass || {};

  const { current, total } = pagination.paging(
    results_start,
    results_available,
    paging.eventsPerPage,
  );

  return (
    <Container title="社外イベント" back authUser={authUser} history={history} firebase={firebase}>
      {loading ? (
        <Spinner />
      ) : events && events.length ? (
        <>
          {eventFormat.external({ events }).map(event => (
            <EventCardContainer key={event.id}>
              <EventCard
                title={event.title}
                eventUrl={event.eventUrl}
                catchMessage={event.catchMessage}
                place={event.place}
                datetime={event.startedAt}
                interactive
              />
            </EventCardContainer>
          ))}
          <PaginationContainer>
            <Pagination current={current} total={total} onClick={page => refetch({ page })} large />
          </PaginationContainer>
        </>
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
    connpass: propTypes.shape({
      events: propTypes.arrayOf(
        propTypes.shape({
          title: propTypes.string,
          event_url: propTypes.string,
          catch: propTypes.string,
          place: propTypes.string,
          started_at: propTypes.string,
        }),
      ),
      results_available: propTypes.number.isRequired,
      results_start: propTypes.number.isRequired,
    }),
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
    connpass: {
      events: [],
    },
  },
};

export default ExternalEvents;
