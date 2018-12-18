import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Spinner, Text } from '@blueprintjs/core';
import FloatingButtonList from 'src/components/organisms/FloatingButtonList';
import EventCard from 'src/components/organisms/EventCard';
import SearchForm from 'src/components/organisms/SerchForm';
import Pagination from 'src/components/organisms/Pagination';
import dateFormat from 'src/utils/dateFormat';
import pagination from 'src/utils/pagination';
import paging from 'src/constants/paging';

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const PaginationContainer = styled.div`
  text-align: center;
`;

const ConnpassEvents = ({ data: { loading, connpass, refetch }, subscribe }) => {
  const { events, results_available, results_start } = connpass || {};

  const { current, total } = pagination.paging(
    results_start,
    results_available,
    paging.eventsPerPage,
  );

  const actionButtons = [{ icon: 'notifications', onClick: subscribe }];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : events && events.length ? (
        <>
          <SearchForm search={searchQuery => refetch({ searchQuery })} />
          {connpass.events.map(event => (
            <EventCardContainer key={event.event_id}>
              <EventCard
                title={event.title}
                eventUrl={event.event_url}
                catchMessage={event.catch}
                place={event.place}
                datetime={event.started_at && `${dateFormat.datetimeJa(event.started_at)}〜`}
                interactive
              />
            </EventCardContainer>
          ))}
          <PaginationContainer>
            <Pagination current={current} total={total} onClick={page => refetch({ page })} large />
          </PaginationContainer>
        </>
      ) : (
        <Text>No Contents</Text>
      )}
      <FloatingButtonList items={actionButtons} />
    </>
  );
};

ConnpassEvents.displayName = 'ConnpassEvents';

ConnpassEvents.propTypes = {
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
  subscribe: propTypes.func.isRequired,
};

ConnpassEvents.defaultProps = {
  data: {
    loading: false,
    connpass: {
      events: [],
    },
  },
};

export default ConnpassEvents;
