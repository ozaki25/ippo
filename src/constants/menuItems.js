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

const findItemByValue = value =>
  menuItems[Object.keys(menuItems).find(key => menuItems[key].value === value)];

const findItemByTitle = title =>
  menuItems[Object.keys(menuItems).find(key => menuItems[key].title === title)];

export default {
  ...menuItems,
  findItemByValue,
  findItemByTitle,
};
