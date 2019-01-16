import React from 'react';
import { Typography } from '@material-ui/core';
import { AccessTimeRounded, DescriptionOutlined, PlaceOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import RoundedButton from 'src/components/atoms/RoundedButton';
import Tweet from 'src/components/organisms/Tweet';
import IconWithText from 'src/components/templates/IconWithText';
import dateFormat from 'src/utils/dateFormat';

const Container = styled.div`
  padding-top: 8px;
`;

const TweetEventSummary = ({
  id,
  hashtag,
  title,
  catchMessage,
  place,
  startedAt,
  name,
  timestamp,
  joined,
  onClickJoin,
  onClickLeave,
}) => (
  <Tweet
    name={name}
    time={dateFormat.datetimeJa(+timestamp)}
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
        <RoundedButton color="primary" disabled={joined} onClick={onClickJoin}>
          参加する
        </RoundedButton>{' '}
        <RoundedButton disabled={!joined} onClick={onClickLeave}>
          キャンセルする
        </RoundedButton>
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
  joined: propTypes.bool,
  onClickJoin: propTypes.func.isRequired,
  onClickLeave: propTypes.func.isRequired,
};

TweetEventSummary.defaultProps = {
  joined: false,
};

export default TweetEventSummary;
