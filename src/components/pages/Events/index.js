import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { Spinner, Text } from '@blueprintjs/core';
import NavigationBar from 'src/components/molecules/NavigationBar';
import EventCard from 'src/components/organisms/EventCard';
import SearchForm from 'src/components/organisms/SerchForm';

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
        <Spinner />
      ) : connpass ? (
        <>
          <SearchForm />
          {connpass.events.map(event => (
            <EventCardContainer key={event.event_id}>
              <EventCard
                title={event.title}
                eventUrl={event.event_url}
                catchMessage={event.catch}
                place={event.place}
                datetime={
                  event.started_at && dayjs(event.started_at).format('YYYY年MM月DD日 HH:mm〜')
                }
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
