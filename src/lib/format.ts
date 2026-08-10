export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-");
  return `${y}.${m}.${d}`;
}
