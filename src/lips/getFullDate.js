export default function getFullDate(dateString, joiner = '.') {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}${joiner}${month}${joiner}${day}`;
}
