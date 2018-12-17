import { askForPermissionToReceiveNotifications } from 'src/push-notification';

const askForPermission = () => askForPermissionToReceiveNotifications();

const isGranted = () => Notification.permission === 'granted';

const isDenied = () => Notification.permission === 'denied';

const isUndecided = () => Notification.permission === 'default';

const permission = () => Notification.permission;

const isSupported = () => 'PushManager' in window;

export default { askForPermission, isGranted, isDenied, isUndecided, permission, isSupported };
