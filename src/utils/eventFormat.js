import dateFormat from 'src/utils/dateFormat';
import ROUTES from 'src/constants/routes';

const external = props =>
  props
    ? props.map(event => ({
        ...event,
        startedAt: event.startedAt ? `${dateFormat.datetimeJa(event.startedAt)} 〜` : '',
      }))
    : [];

const internal = props =>
  props
    ? props.map(event => ({
        ...event,
        eventUrl: `${ROUTES.Tweets}?hashtag=${event.hashtag}`,
        startedAt: event.startedAt ? `${dateFormat.datetimeJa(event.startedAt)} 〜` : '',
      }))
    : [];

export default {
  external,
  internal,
};
