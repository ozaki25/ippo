import dayjs from 'dayjs';

const datetimeJa = date => dayjs(date).format('YYYY年MM月DD日 HH:mm');

export default {
  datetimeJa,
};
