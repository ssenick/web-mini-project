export function getDate(): string {
   const today = new Date();
   const today_date = today.toLocaleDateString('en-GB');
   return today_date.replace(/\//g, '.');
}
