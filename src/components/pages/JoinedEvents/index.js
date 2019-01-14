import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import eventFormat from 'src/utils/eventFormat';
import paging from 'src/constants/paging';

const JoinedEvents = ({
  data: { loading, joinedEvents, fetchMore },
  authUser,
  history,
  firebase,
}) => {
  const loadMore = () => {
    const variables = {
      uid: authUser.uid,
      limit: paging.eventsPerPage,
      startId: joinedEvents.startId,
    };
    const updateQuery = (prev, { fetchMoreResult }) => ({
      ...prev,
      joinedEvents: {
        ...prev.joinedEvents,
        items: [...prev.joinedEvents.items, ...fetchMoreResult.joinedEvents.items],
        startId: fetchMoreResult.joinedEvents.startId,
      },
    });
    fetchMore({ variables, updateQuery });
  };

  return (
    <Container title="参加イベント" back authUser={authUser} history={history} firebase={firebase}>
      {loading ? (
        <Spinner />
      ) : joinedEvents.items && joinedEvents.items.length ? (
        <InfiniteScroll
          key={joinedEvents.items.length}
          pageStart={0}
          loadMore={loadMore}
          hasMore={!!joinedEvents.startId}
          loader={<Spinner key={joinedEvents.items.length} />}
          threshold={300}
        >
          <EventCardList events={eventFormat.internal(joinedEvents.items)} history={history} />
        </InfiniteScroll>
      ) : (
        <Typography>No Contents</Typography>
      )}
    </Container>
  );
};

JoinedEvents.displayName = 'JoinedEvents';

JoinedEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    joinedEvents: propTypes.shape({
      items: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
    }),
    fetchMore: propTypes.func.isRequired,
  }),
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

JoinedEvents.defaultProps = {
  data: {
    loading: false,
    joinedEvents: {
      items: [],
      startId: null,
    },
  },
};

export default JoinedEvents;
