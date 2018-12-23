import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Text } from '@blueprintjs/core';
import EventCard from 'src/components/organisms/EventCard';
import dateFormat from 'src/utils/dateFormat';

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const EventCardList = ({ events, expand, history }) =>
  events && events.length ? (
    events.map(event => (
      <EventCardContainer key={event.id}>
        <EventCard
          title={event.title}
          eventUrl={event.eventUrl}
          catchMessage={event.catchMessage}
          place={event.place}
          datetime={event.startedAt && `${dateFormat.datetimeJa(event.startedAt)} 〜`}
          interactive
          expand={expand}
          history={history}
        />
      </EventCardContainer>
    ))
  ) : (
    <Text>該当するイベントがありません</Text>
  );
EventCardList.displayName = 'EventCardList';

EventCardList.propTypes = {
  events: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([propTypes.string, propTypes.number]),
      title: propTypes.string,
      eventUrl: propTypes.string.isRequired,
      catchMessage: propTypes.string,
      place: propTypes.string,
      datetime: propTypes.string,
      interactive: propTypes.bool,
    }),
  ).isRequired,
  expand: propTypes.bool,
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

EventCardList.defaultProps = {
  eventUrl: '',
  expand: false,
  history: null,
};

export default EventCardList;
