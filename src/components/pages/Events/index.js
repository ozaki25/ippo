import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Text } from '@blueprintjs/core';
import NavigationBar from 'src/components/molecules/NavigationBar';
import EventCard from 'src/components/organisms/EventCard';

const Container = styled.div`
  padding: 10px 15px;
`;

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const Events = ({ data: { loading, connpass } }) => (
  <>
    <NavigationBar appName="IPPO" />
    <Container>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        connpass.events.map(event => (
          <EventCardContainer>
            <EventCard
              key={event.event_id}
              title={event.title}
              eventUrl={event.event_url}
              catchMessage={event.catch}
              place={event.place}
              interactive
            />
          </EventCardContainer>
        ))
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
        }),
      ),
    }),
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
