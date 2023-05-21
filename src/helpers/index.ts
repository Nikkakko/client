import moment from 'moment';

export const convertedDate = (date: string) => {
  //check if date is utc or not
  if (moment.utc(date).format('DD MMMM YYYY') === 'Invalid date') {
    return moment(date).format('DD MMMM YYYY');
  } else {
    return moment.utc(date).format('DD MMMM YYYY');
  }
};
