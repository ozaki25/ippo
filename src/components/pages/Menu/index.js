import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { H3, Text } from '@blueprintjs/core';
import Container from 'src/components/templates/Container';
import EventCard from 'src/components/organisms/EventCard';
import AsyncSwipeable from 'src/components/templates/AsyncSwipeable';
import dateFormat from 'src/utils/dateFormat';

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const Menu = ({ internalEvents, connpassEvents }) => {
  return (
    <Container>
      <H3>社内イベント</H3>
      <AsyncSwipeable loading={internalEvents.loading}>
        {internalEvents.internalEvents ? (
          internalEvents.internalEvents.map(event => (
            <EventCardContainer key={event.id}>
              <EventCard
                title={event.title}
                eventUrl=""
                catchMessage={event.catchMessage}
                place={event.place}
                datetime={event.startedAt && dateFormat.startDatetimeJa(event.startedAt)}
                interactive
              />
            </EventCardContainer>
          ))
        ) : (
          <Text>No Contents</Text>
        )}
      </AsyncSwipeable>
      <H3>外部イベント</H3>
      <AsyncSwipeable loading={connpassEvents.loading}>
        {connpassEvents.connpass ? (
          connpassEvents.connpass.events.map(event => (
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
          ))
        ) : (
          <Text>No Contents</Text>
        )}
      </AsyncSwipeable>
    </Container>
  );
};

Menu.displayName = 'Menu';

Menu.propTypes = {
  connpassEvents: propTypes.shape({
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
  }).isRequired,
  internalEvents: propTypes.shape({
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
  }).isRequired,
};

Menu.defaultProps = {};

export default Menu;
