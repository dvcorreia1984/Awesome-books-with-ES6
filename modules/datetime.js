import { DateTime } from 'luxon';

const dt = DateTime.now().toFormat('MMMM d yyyy, HH:mm') + DateTime.now().toFormat('a').toLowerCase();
export default dt;