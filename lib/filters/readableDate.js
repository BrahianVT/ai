import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
dayjs.extend(utc);

export default function(date) {
  return dayjs(date).utc().format('D MMMM YYYY hh:mm A');
};
