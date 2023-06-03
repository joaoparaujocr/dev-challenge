export default function formatterHours(int: number) {
  const hours = Math.floor(int / 60);
  const minutes = int % 60;

  return `${hours}h${minutes}`;
}
