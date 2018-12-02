import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import EventCard from 'src/components/organisms/EventCard';

const Container = styled.div`
  padding: 10px 15px;
`;

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const Events = ({ data }) => (
  <Container>
    {data.connpass.events.map(event => (
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
    ))}
  </Container>
);

Events.displayName = 'Events';

Events.propTypes = {
  data: propTypes.shape({
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
  events: [],
};

export default Events;
