import dayjs from 'dayjs-ext';

const startDatetimeJa = date => dayjs(date).format('YYYY年MM月DD日 HH:mm〜');

export default {
  startDatetimeJa,
};
