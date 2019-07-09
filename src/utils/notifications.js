const isGranted = () =>
  'Notification' in window && Notification.permission === 'granted';

const isDenied = () =>
  'Notification' in window && Notification.permission === 'denied';

const isUndecided = () =>
  'Notification' in window && Notification.permission === 'default';

const permission = () => 'Notification' in window && Notification.permission;

const isSupported = () => 'PushManager' in window && 'Notification' in window;

export default { isGranted, isDenied, isUndecided, permission, isSupported };
