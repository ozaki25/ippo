import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Spinner, Text } from '@blueprintjs/core';
import FloatingButton from 'src/components/molecules/FloatingButton';
import EventCard from 'src/components/organisms/EventCard';
import dateFormat from 'src/utils/dateFormat';
import notifications from 'src/utils/notifications';

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const InternalEvents = ({ data: { loading, internalEvents }, registerNotification, history }) => {
  const onClickSubscribe = async () => {
    const token = await notifications.askForPermission();
    const { data } = await registerNotification({ variables: { token } });
    console.log(data);
  };

  const onClickNew = () => history.push('/events/new');

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
          <FloatingButton icon="plus" onClick={onClickNew} />
        </>
      ) : (
        <Text>No Contents</Text>
      )}
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
  registerNotification: propTypes.func.isRequired,
};

InternalEvents.defaultProps = {
  data: {
    loading: false,
    internalEvents: [],
  },
};

export default withRouter(InternalEvents);
