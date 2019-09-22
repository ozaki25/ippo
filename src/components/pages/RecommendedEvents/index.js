import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Spinner from 'components/atoms/Spinner';
import EventCardList from 'components/organisms/EventCardList';
import Container from 'components/templates/Container';
import eventFormat from 'utils/eventFormat';
import paging from 'constants/paging';

const RecommendedEvents = ({
  data: { loading, recommendedEvents, fetchMore },
  authUser,
  history,
  firebase,
}) => {
  const loadMore = () => {
    const variables = {
      uid: authUser.uid,
      limit: paging.eventsPerPage,
      startId: recommendedEvents.startId,
    };
    const updateQuery = (prev, { fetchMoreResult }) => ({
      ...prev,
      recommendedEvents: {
        ...prev.recommendedEvents,
        items: [...prev.recommendedEvents.items, ...fetchMoreResult.recommendedEvents.items],
        startId: fetchMoreResult.recommendedEvents.startId,
      },
    });
    fetchMore({ variables, updateQuery });
  };

  return (
    <Container
      title="おすすめイベント"
      back
      noPadding
      authUser={authUser}
      history={history}
      firebase={firebase}
    >
      {loading ? (
        <Spinner />
      ) : recommendedEvents.items && recommendedEvents.items.length ? (
        <InfiniteScroll
          key={recommendedEvents.items.length}
          pageStart={0}
          loadMore={loadMore}
          hasMore={!!recommendedEvents.startId}
          loader={<Spinner key={recommendedEvents.items.length} />}
          threshold={300}
        >
          <EventCardList events={eventFormat.internal(recommendedEvents.items)} history={history} />
        </InfiniteScroll>
      ) : (
        <Typography>No Contents</Typography>
      )}
    </Container>
  );
};

RecommendedEvents.displayName = 'RecommendedEvents';

RecommendedEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    recommendedEvents: propTypes.shape({
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

RecommendedEvents.defaultProps = {
  data: {
    loading: false,
    recommendedEvents: {
      items: [],
      startId: null,
    },
  },
};

export default RecommendedEvents;
