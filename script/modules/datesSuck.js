const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const padDay = d => (d < 10 ? `0${d}` : d);
const formatMonth = m => months[m];
const formatDate = date => {
  const day = padDay(date.getDate());
  const month = formatMonth(date.getMonth());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export default formatDate;
