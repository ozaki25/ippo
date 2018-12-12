import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Spinner, Text } from '@blueprintjs/core';
import NavigationBar from 'src/components/molecules/NavigationBar';
import EventCard from 'src/components/organisms/EventCard';
import SearchForm from 'src/components/organisms/SerchForm';
import dateFormat from 'src/utils/dateFormat';

const Container = styled.div`
  padding: 10px 15px;
`;

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const Events = ({ data: { loading, connpass, refetch } }) => (
  <>
    <NavigationBar appName="IPPO" />
    <Container>
      {loading && <Spinner />}
      {connpass && connpass.events ? (
        <>
          <SearchForm search={searchQuery => refetch({ searchQuery })} />
          {connpass.events.map(event => (
            <EventCardContainer key={event.event_id}>
              <EventCard
                title={event.title}
                eventUrl={event.event_url}
                catchMessage={event.catch}
                place={event.place}
                datetime={event.started_at && dateFormat.startDatetimeJa(event.started_at)}
                interactive
              />
            </EventCardContainer>
          ))}
        </>
      ) : (
        <Text>No Contents</Text>
      )}
    </Container>
  </>
);

Events.displayName = 'Events';

Events.propTypes = {
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
    }),
    refetch: propTypes.func.isRequired,
  }),
};

Events.defaultProps = {
  data: {
    loading: false,
    connpass: {
      events: [],
    },
  },
};

export default Events;
