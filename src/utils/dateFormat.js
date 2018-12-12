import dayjs from 'dayjs';

const startDatetimeJa = date => dayjs(date).format('YYYY年MM月DD日 HH:mm〜');

export default {
  startDatetimeJa,
};
