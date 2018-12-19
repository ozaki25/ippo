import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { H3 } from '@blueprintjs/core';
import EventCardList from 'src/components/organisms/EventCardList';
import Container from 'src/components/templates/Container';
import AsyncSwipeable from 'src/components/templates/AsyncSwipeable';
import eventFormat from 'src/utils/eventFormat';
import ROUTES from 'src/constants/routes';

const Menu = ({ internal, external }) => {
  return (
    <Container>
      <H3>
        <Link to={ROUTES.Menu}>参加予定イベント</Link>
      </H3>
      <AsyncSwipeable loading={true} />
      <H3>
        <Link to={ROUTES.Menu}>おすすめイベント</Link>
      </H3>
      <AsyncSwipeable loading={true} />
      <H3>
        <Link to={ROUTES.InternalEvents}>社内イベント</Link>
      </H3>
      <AsyncSwipeable loading={internal.loading}>
        {EventCardList({ events: internal.internalEvents })}
      </AsyncSwipeable>
      <H3>
        <Link to={ROUTES.ExternalEvents}>社外イベント</Link>
      </H3>
      <AsyncSwipeable loading={external.loading}>
        {EventCardList({ events: eventFormat.convertPropsName(external.connpass) })}
      </AsyncSwipeable>
    </Container>
  );
};

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
};

Menu.defaultProps = {};

export default Menu;
