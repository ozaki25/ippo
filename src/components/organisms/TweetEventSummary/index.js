import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { AccessTimeRounded, DescriptionOutlined, PlaceOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import RoundedButton from 'src/components/atoms/RoundedButton';
import Tweet from 'src/components/organisms/Tweet';
import IconWithText from 'src/components/templates/IconWithText';
import dateFormat from 'src/utils/dateFormat';
import ROUTES from 'src/constants/routes';

const Container = styled.div`
  padding-top: 8px;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin: 3px 0 8px;
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
        <StyledLink to={`${ROUTES.Tweets}?hashtag=${hashtag}`}>{`#${hashtag}`} </StyledLink>
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
  timestamp: propTypes.string,
  onClickJoin: propTypes.func.isRequired,
  onClickLeave: propTypes.func.isRequired,
};

TweetEventSummary.defaultProps = {
  joined: false,
};

export default TweetEventSummary;
