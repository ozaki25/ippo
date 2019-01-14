const menuItems = {
  HOME: {
    value: 0,
    title: 'ホーム',
  },
  NEW_EVENT: {
    value: 1,
    title: 'イベント作成',
  },
  NOTIFICATION: {
    value: 2,
    title: '通知',
  },
};

const findItem = value =>
  menuItems[Object.keys(menuItems).find(key => menuItems[key].value === value)];

export default {
  ...menuItems,
  findItem,
};
