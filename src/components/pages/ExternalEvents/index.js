import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import eventFormat from 'src/utils/eventFormat';
import paging from 'src/constants/paging';

const ExternalEvents = ({
  data: { loading, externalEvents, fetchMore },
  authUser,
  history,
  firebase,
}) => {
  const loadMore = () => {
    const variables = {
      limit: paging.eventsPerPage,
      startId: externalEvents.startId,
    };
    const updateQuery = (prev, { fetchMoreResult }) => ({
      ...prev,
      externalEvents: {
        ...prev.externalEvents,
        items: [
          ...prev.externalEvents.items,
          ...fetchMoreResult.externalEvents.items,
        ],
        startId: fetchMoreResult.externalEvents.startId,
      },
    });
    fetchMore({ variables, updateQuery });
  };

  return (
    <Container
      title="社外イベント"
      back
      noPadding
      authUser={authUser}
      history={history}
      firebase={firebase}
    >
      {loading ? (
        <Spinner />
      ) : externalEvents.items && externalEvents.items.length ? (
        <InfiniteScroll
          key={externalEvents.items.length}
          pageStart={0}
          loadMore={loadMore}
          hasMore={!!externalEvents.startId}
          loader={<Spinner key={externalEvents.items.length} />}
          threshold={300}
        >
          <EventCardList events={eventFormat.external(externalEvents.items)} />
        </InfiniteScroll>
      ) : (
        <Typography>No Contents</Typography>
      )}
    </Container>
  );
};

ExternalEvents.displayName = 'ExternalEvents';

ExternalEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    externalEvents: propTypes.shape({
      items: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          eventUrl: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
      startId: propTypes.string,
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

ExternalEvents.defaultProps = {
  data: {
    loading: false,
    externalEvents: {
      items: [],
      startId: null,
    },
  },
};

export default ExternalEvents;
