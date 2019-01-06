import React from 'react';
import { Typography } from '@material-ui/core';
import { AccessTimeRounded, DescriptionOutlined, PlaceOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Tweet from 'src/components/organisms/Tweet';
import IconWithText from 'src/components/templates/IconWithText';
import dateFormat from 'src/utils/dateFormat';

const Container = styled.div`
  padding-top: 8px;
`;

const TweetEventSummary = ({ id, hashtag, title, catchMessage, place, startedAt, name }) => (
  <Tweet
    name={name}
    time={dateFormat.datetimeJa(+id)}
    text={
      <Container>
        <Typography variant="h5">{title}</Typography>
        {catchMessage && (
          <div>
            <IconWithText>
              <DescriptionOutlined fontSize="small" />
              <Typography>{catchMessage}</Typography>
            </IconWithText>
          </div>
        )}
        {place && (
          <div>
            <IconWithText>
              <PlaceOutlined fontSize="small" />
              <Typography>{place}</Typography>
            </IconWithText>
          </div>
        )}
        {startedAt && (
          <div>
            <IconWithText>
              <AccessTimeRounded fontSize="small" />
              <Typography>{startedAt}</Typography>
            </IconWithText>
          </div>
        )}
        <Typography>{`#${hashtag}`}</Typography>
      </Container>
    }
    fixed
  />
);

TweetEventSummary.displayName = 'TweetEventSummary';

TweetEventSummary.propTypes = {
  id: propTypes.string,
  hashtag: propTypes.string,
  title: propTypes.string,
  catchMessage: propTypes.string,
  place: propTypes.string,
  startedAt: propTypes.string,
  name: propTypes.string,
};

TweetEventSummary.defaultProps = {};

export default TweetEventSummary;
