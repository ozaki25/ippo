import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Tweet from 'src/components/molecules/Tweet';

const Centering = styled.div`
  text-align: center;
`;

const TweetList = ({ items, loadMore, hasMore }) => (
  <InfiniteScroll
    key={items.length}
    pageStart={0}
    loadMore={loadMore}
    hasMore={hasMore}
    loader={
      <Centering key={items.length}>
        <CircularProgress />
      </Centering>
    }
    threshold={100}
  >
    {items.map(item => (
      <Tweet key={item.id} {...item} />
    ))}
  </InfiniteScroll>
);

TweetList.displayName = 'TweetList';

TweetList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
      time: propTypes.string.isRequired,
    }),
  ),
  loadMore: propTypes.func.isRequired,
  hasMore: propTypes.bool.isRequired,
};

TweetList.defaultProps = {
  items: [],
};

export default TweetList;
