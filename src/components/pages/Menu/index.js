import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { H3, Icon } from '@blueprintjs/core';
import CustomCard from 'src/components/molecules/CustomCard';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import AsyncSwipeable from 'src/components/templates/AsyncSwipeable';
import eventFormat from 'src/utils/eventFormat';
import ROUTES from 'src/constants/routes';

const CardContainer = styled.div`
  margin: 8px 0;
  text-align: center;
`;

const Menu = ({ internal, external, authUser, history }) => (
  <Container authUser={authUser}>
    <H3>
      <Link to={ROUTES.EnteredEvents}>参加イベント</Link>
    </H3>
    <AsyncSwipeable loading={false}>
      {EventCardList({ events: [], expand: true, history })}
    </AsyncSwipeable>
    <H3>
      <Link to={ROUTES.RecommendedEvents}>おすすめイベント</Link>
    </H3>
    <AsyncSwipeable loading={false}>
      {EventCardList({ events: [], expand: true, history })}
    </AsyncSwipeable>
    <H3>
      <Link to={ROUTES.InternalEvents}>社内イベント</Link>
    </H3>
    <AsyncSwipeable loading={internal.loading}>
      {EventCardList({ events: internal.internalEvents, expand: true, history })}
    </AsyncSwipeable>
    <H3>
      <Link to={ROUTES.ExternalEvents}>社外イベント</Link>
    </H3>
    <AsyncSwipeable loading={external.loading}>
      {EventCardList({
        events: eventFormat.convertPropsName(external.connpass),
        expand: true,
      })}
    </AsyncSwipeable>
    <H3>
      <Link to={ROUTES.OrganizedEvents}>主催イベント</Link>
    </H3>
    <AsyncSwipeable loading={false}>
      <CardContainer>
        <CustomCard url={ROUTES.NewEvent} history={history}>
          <H3>
            <Icon icon="plus" iconSize={28} /> イベント作成
          </H3>
        </CustomCard>
      </CardContainer>
      {EventCardList({ events: [], expand: true, history })}
    </AsyncSwipeable>
  </Container>
);

Menu.displayName = 'Menu';

Menu.propTypes = {
  internal: propTypes.shape({
    loading: propTypes.bool.isRequired,
    internalEvents: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
  }).isRequired,
  external: propTypes.shape({
    loading: propTypes.bool.isRequired,
    connpass: propTypes.shape({
      events: propTypes.arrayOf(
        propTypes.shape({
          event_id: propTypes.number,
          title: propTypes.string,
          event_url: propTypes.string,
          catch: propTypes.string,
          place: propTypes.string,
          started_at: propTypes.string,
        }),
      ),
    }),
  }).isRequired,
  authUser: propTypes.object,
};

Menu.defaultProps = {
  authUser: null,
};

export default Menu;
