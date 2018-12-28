import React from 'react';
import propTypes from 'prop-types';
// import { Text } from '@blueprintjs/core';
// import CustomCard from 'src/components/molecules/CustomCard';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

const EventCard = ({
  title,
  eventUrl,
  catchMessage,
  place,
  datetime,
  interactive,
  expand,
  history,
}) => (
  <Card expand={expand} interactive={interactive} url={eventUrl} history={history}>
    <CardActionArea>
      <CardContent>
        <h3 className="bp3-heading">{title}</h3>
        {catchMessage && <Typography>{`概要：${catchMessage}`}</Typography>}
        {place && <Typography>{`場所：${place}`}</Typography>}
        {datetime && <Typography>{`日時：${datetime}`}</Typography>}
      </CardContent>
    </CardActionArea>
  </Card>
);

EventCard.displayName = 'EventCard';

EventCard.propTypes = {
  title: propTypes.string.isRequired,
  eventUrl: propTypes.string.isRequired,
  catchMessage: propTypes.string,
  place: propTypes.string,
  datetime: propTypes.string,
  interactive: propTypes.bool,
  expand: propTypes.bool,
  history: propTypes.shape({
    push: propTypes.func,
  }),
};

EventCard.defaultProps = {
  catchMessage: '',
  place: '',
  datetime: '',
  interactive: true,
  expand: false,
  history: null,
};

export default EventCard;
