export const responseToObject = (input: string): any => {
  const query = new URLSearchParams(input)
  return Object.fromEntries(query)
}
