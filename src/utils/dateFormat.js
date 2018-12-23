import dayjs from 'dayjs';

const datetimeJa = date => dayjs(date).format('YYYY/MM/DD HH:mm');

export default {
  datetimeJa,
};
