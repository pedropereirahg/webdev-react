import capitalize from 'lodash/capitalize';

export default function capitalizeEvery(...words) {
  return words.map(word => capitalize(word)).join(' ');
}
