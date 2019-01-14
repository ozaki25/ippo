import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import eventFormat from 'src/utils/eventFormat';
import paging from 'src/constants/paging';

const OrganizedEvents = ({
  data: { loading, organizedEvents, fetchMore },
  authUser,
  history,
  firebase,
}) => {
  const loadMore = () => {
    const { startId } = organizedEvents;
    fetchMore({
      variables: {
        uid: authUser.uid,
        limit: paging.eventsPerPage,
        startId,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          ...prev,
          organizedEvents: {
            ...prev.organizedEvents,
            items: [...prev.organizedEvents.items, ...fetchMoreResult.organizedEvents.items],
            startId: fetchMoreResult.organizedEvents.startId,
          },
        };
      },
    });
  };

  return (
    <Container title="主催イベント" back authUser={authUser} history={history} firebase={firebase}>
      {loading ? (
        <Spinner />
      ) : organizedEvents.items && organizedEvents.items.length ? (
        <InfiniteScroll
          key={organizedEvents.items.length}
          pageStart={0}
          loadMore={loadMore}
          hasMore={!!organizedEvents.startId}
          loader={<Spinner key={organizedEvents.items.length} />}
          threshold={300}
        >
          <EventCardList events={eventFormat.internal(organizedEvents.items)} history={history} />
        </InfiniteScroll>
      ) : (
        <Typography>No Contents</Typography>
      )}
    </Container>
  );
};

OrganizedEvents.displayName = 'OrganizedEvents';

OrganizedEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    organizedEvents: propTypes.shape({
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

OrganizedEvents.defaultProps = {
  data: {
    loading: false,
    organizedEvents: {
      items: [],
      startId: null,
    },
  },
};

export default OrganizedEvents;
