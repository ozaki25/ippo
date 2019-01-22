import React from 'react';
import propTypes from 'prop-types';
import EventCard from 'src/components/organisms/EventCard';

const EventCardList = ({ events, expand, noWrap, history }) =>
  events &&
  events.map(event => (
    <EventCard
      key={event.id}
      title={event.title}
      eventUrl={event.eventUrl}
      catchMessage={event.catchMessage}
      place={event.place}
      datetime={event.startedAt}
      expand={expand}
      noWrap={noWrap}
      history={history}
    />
  ));
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
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

EventCardList.defaultProps = {
  eventUrl: '',
  expand: false,
  noWrap: false,
  history: null,
};

export default EventCardList;
