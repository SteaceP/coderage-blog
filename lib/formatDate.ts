/**
 * Returns a formatted date string.
 * @param dateString - The string representation of the date.
 * @returns The formatted date string.
 */
export default function getFormattedDate(dateString: string): string {
  // Create a new date object from the input string.
  const date = new Date(dateString);

  // Format the date object using the 'en-CA' locale and the 'long' date style.
  const formattedDate = new Intl.DateTimeFormat('en-CA', {
    dateStyle: 'long',
  }).format(date);

  // Return the formatted date string.
  return formattedDate;
}
