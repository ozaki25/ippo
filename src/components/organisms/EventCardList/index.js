import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import EventCard from 'src/components/organisms/EventCard';
import dateFormat from 'src/utils/dateFormat';

const EventCardContainer = styled.div`
  margin: ${({ horizontal }) => (horizontal ? '2px 0' : '8px 0')};
`;

const EventCardList = ({ events, expand, noWrap, history, horizontal }) =>
  events && events.length ? (
    events.map(event => (
      <EventCardContainer key={event.id} horizontal={horizontal ? 1 : 0}>
        <EventCard
          title={event.title}
          eventUrl={event.eventUrl}
          catchMessage={event.catchMessage}
          place={event.place}
          datetime={event.startedAt && `${dateFormat.datetimeJa(event.startedAt)} 〜`}
          interactive
          expand={expand}
          noWrap={noWrap}
          history={history}
        />
      </EventCardContainer>
    ))
  ) : (
    <Typography>該当するイベントがありません</Typography>
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
    }),
  ).isRequired,
  expand: propTypes.bool,
  noWrap: propTypes.bool,
  horizontal: propTypes.bool,
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

EventCardList.defaultProps = {
  eventUrl: '',
  expand: false,
  noWrap: false,
  horizontal: false,
  history: null,
};

export default EventCardList;
