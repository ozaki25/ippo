const convertPropsName = props =>
  props
    ? props.events.map(event => ({
        id: event.event_id,
        title: event.title,
        eventUrl: event.event_url,
        catchMessage: event.catch,
        place: event.place,
        startedAt: event.started_at,
      }))
    : [];

export default {
  convertPropsName,
};
