import React from 'react';
import { Typography } from '@material-ui/core';
import { NavigateNextRounded } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventCard from 'src/components/organisms/EventCard';
import EventCardList from 'src/components/organisms/EventCardList';
import ShrinkSwipeable from 'src/components/templates/ShrinkSwipeable';
import IconWithText from 'src/components/templates/IconWithText';
import eventFormat from 'src/utils/eventFormat';
import ROUTES from 'src/constants/routes';

const EventsContainer = styled.div`
  margin-top: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkHeading = ({ linkTo, children }) => (
  <StyledLink to={linkTo}>
    <IconWithText>
      <NavigateNextRounded color="primary" />
      <Typography variant="h6" color="primary">
        {children}
      </Typography>
    </IconWithText>
  </StyledLink>
);

const EventsOverview = ({
  joined,
  organized,
  recommended,
  internal,
  external,
  history,
}) => {
  const joinedEvents = eventFormat.internal(joined);
  const organizedEvents = eventFormat.internal(organized);
  const recommendedEvents = eventFormat.internal(recommended);
  const internalEvents = eventFormat.internal(internal);
  const externalEvents = eventFormat.external(external);
  return (
    <>
      <EventsContainer>
        <LinkHeading linkTo={ROUTES.JoinedEvents}>参加イベント</LinkHeading>
        <ShrinkSwipeable>
          {joinedEvents && joinedEvents.length ? (
            EventCardList({
              events: joinedEvents,
              expand: true,
              noWrap: true,
              history,
            })
          ) : (
            <EventCard
              title="イベントに申し込んでみよう！"
              eventUrl={ROUTES.InternalEvents}
              history={history}
            />
          )}
        </ShrinkSwipeable>
      </EventsContainer>
      <EventsContainer>
        <LinkHeading linkTo={ROUTES.RecommendedEvents}>
          おすすめイベント
        </LinkHeading>
        <ShrinkSwipeable>
          {recommendedEvents && recommendedEvents.length ? (
            EventCardList({
              events: recommendedEvents,
              expand: true,
              noWrap: true,
              history,
            })
          ) : (
            <EventCard
              title="興味のあるカテゴリを追加してみよう！"
              eventUrl={ROUTES.SettingsAccount}
              history={history}
            />
          )}
        </ShrinkSwipeable>
      </EventsContainer>
      <EventsContainer>
        <LinkHeading linkTo={ROUTES.InternalEvents}>社内イベント</LinkHeading>
        <ShrinkSwipeable>
          {internalEvents && [
            ...EventCardList({
              events: internalEvents,
              expand: true,
              noWrap: true,
              history,
            }),
            <EventCard
              key="more"
              title="社内イベントをもっと見る"
              eventUrl={ROUTES.InternalEvents}
              history={history}
              expand
            />,
          ]}
        </ShrinkSwipeable>
      </EventsContainer>
      <EventsContainer>
        <LinkHeading linkTo={ROUTES.ExternalEvents}>社外イベント</LinkHeading>
        <ShrinkSwipeable>
          {externalEvents && [
            ...EventCardList({
              events: externalEvents,
              expand: true,
              noWrap: true,
            }),
            <EventCard
              key="more"
              title="社外イベントをもっと見る"
              eventUrl={ROUTES.ExternalEvents}
              history={history}
              expand
            />,
          ]}
        </ShrinkSwipeable>
      </EventsContainer>
      <EventsContainer>
        <LinkHeading linkTo={ROUTES.OrganizedEvents}>主催イベント</LinkHeading>
        <ShrinkSwipeable>
          {organizedEvents && organizedEvents.length ? (
            EventCardList({
              events: organizedEvents,
              expand: true,
              noWrap: true,
              history,
            })
          ) : (
            <EventCard
              title="イベントを開催してみよう！"
              eventUrl={`${ROUTES.Menu}?tab=イベント作成`}
              history={history}
            />
          )}
        </ShrinkSwipeable>
      </EventsContainer>
    </>
  );
};

EventsOverview.displayName = 'EventsOverview';

EventsOverview.propTypes = {
  joined: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  organized: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  recommended: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  internal: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  external: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      eventUrl: propTypes.string,
      catchMessage: propTypes.string,
      place: propTypes.string,
      startedAt: propTypes.string,
    }),
  ).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

EventsOverview.defaultProps = {};

export default EventsOverview;
