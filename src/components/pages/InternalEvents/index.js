import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Spinner, Text } from '@blueprintjs/core';
import FloatingButtonList from 'src/components/organisms/FloatingButtonList';
import EventCard from 'src/components/organisms/EventCard';
import dateFormat from 'src/utils/dateFormat';

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const InternalEvents = ({ data: { loading, internalEvents }, history, subscribe }) => {
  const onClickNew = () => history.push('/events/new');

  const actionButtons = [
    { icon: 'notifications', onClick: subscribe },
    { icon: 'plus', onClick: onClickNew },
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : internalEvents && internalEvents.length ? (
        <>
          {internalEvents.map(event => (
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
          ))}
        </>
      ) : (
        <Text>No Contents</Text>
      )}
      <FloatingButtonList items={actionButtons} />
    </>
  );
};

InternalEvents.displayName = 'InternalEvents';

InternalEvents.propTypes = {
  data: propTypes.shape({
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
  }),
  subscribe: propTypes.func.isRequired,
};

InternalEvents.defaultProps = {
  data: {
    loading: false,
    internalEvents: [],
  },
};

export default InternalEvents;
