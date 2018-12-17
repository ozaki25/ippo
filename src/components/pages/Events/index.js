import React from 'react';
import propTypes from 'prop-types';
import TabMenu from 'src/components/molecules/TabMenu';
import Container from 'src/components/templates/Container';
import ConnpassEvents from 'src/components/pages/ConnpassEvents';
import InternalEvents from 'src/hoc/WithInternalEvents';
import notifications from 'src/utils/notifications';
import alertMessage from 'src/constants/alertMessage';

const Events = ({ connpassEvents, internalEvents, registerNotification }) => {
  const subscribe = async () => {
    if (notifications.isSupported() && notifications.isUndecided()) {
      const token = await notifications.askForPermission();
      await registerNotification({ variables: { token } });
    } else {
      const type = notifications.isSupported() ? notifications.permission() : 'unsupported';
      alert(alertMessage.subscribeNotification[type]);
    }
  };
  const items = [
    {
      id: 'internal',
      title: '社内',
      Component: () => <InternalEvents data={{ ...internalEvents }} subscribe={subscribe} />,
    },
    {
      id: 'external',
      title: '社外',
      Component: () => <ConnpassEvents data={{ ...connpassEvents }} subscribe={subscribe} />,
    },
  ];
  return (
    <Container>
      <TabMenu items={items} />
    </Container>
  );
};

Events.displayName = 'Events';

Events.propTypes = {
  connpassEvents: propTypes.shape({
    loading: propTypes.bool.isRequired,
    connpass: propTypes.shape({
      events: propTypes.arrayOf(
        propTypes.shape({
          title: propTypes.string,
          event_url: propTypes.string,
          catch: propTypes.string,
          place: propTypes.string,
          started_at: propTypes.string,
        }),
      ),
      results_available: propTypes.number.isRequired,
      results_start: propTypes.number.isRequired,
    }),
    refetch: propTypes.func.isRequired,
  }).isRequired,
  internalEvents: propTypes.shape({
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
  registerNotification: propTypes.func.isRequired,
};

Events.defaultProps = {};

export default Events;
