import dateFormat from 'src/utils/dateFormat';
import ROUTES from 'src/constants/routes';

const external = props =>
  props
    ? props.events.map(event => ({
        id: event.event_id,
        title: event.title,
        eventUrl: event.event_url,
        catchMessage: event.catch,
        place: event.place,
        startedAt: event.started_at ? `${dateFormat.datetimeJa(event.started_at)} 〜` : '',
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
