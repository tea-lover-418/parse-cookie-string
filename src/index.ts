/**
 * # Parse cookies string
 *
 * Parse cookie string from headers into a javascript object.
 *
 * ### Example
 * `import { parseCookieString } from 'parse-cookie-string';
 * const cookies = parseCookieString(cookieString);`
 *
 * input: "userid=10; theme=default; jwt=somevalue"
 * output: {
 *   userId: 10,
 *   theme: default,
 *   jwt: somevalue
 * }
 *
 * ### Typescript
 * Pass a generic to type the return value like this:
 * `parseCookieString<{ jwt: string }>(cookies)`
 */
export const parseCookieString = <T>(cookies: string): T => {
  const cookiesSplit = cookies.split("; ");

  const cookiesObject: any = {};

  cookiesSplit.forEach((cookie: string) => {
    const [cookieName, cookieValue] = cookie.split("=");
    cookiesObject[cookieName] = cookieValue;
  });

  return cookiesObject;
};
