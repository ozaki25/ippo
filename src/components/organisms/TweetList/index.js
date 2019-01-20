import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import propTypes from 'prop-types';
import Spinner from 'src/components/atoms/Spinner';
import Tweet from 'src/components/organisms/Tweet';
import ROUTES from 'src/constants/routes';

const TweetList = ({ items, loadMore, hasMore, history }) => (
  <InfiniteScroll
    key={items.length}
    pageStart={0}
    loadMore={loadMore}
    hasMore={hasMore}
    loader={<Spinner key={items.length} />}
    threshold={300}
  >
    {items.map(item => (
      <Tweet
        key={item.id}
        {...item}
        onClick={e => {
          if (['a', 'svg', 'path'].includes(e.target.tagName.toLowerCase())) return;
          history.push(`${ROUTES.Tweet.replace(':id', item.id)}?hashtag=${item.hashtag}`);
        }}
      />
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
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

TweetList.defaultProps = {
  items: [],
};

export default TweetList;
