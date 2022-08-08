# Parse cookie string

Parse a string of cookies into a javascript object.

Install using `npm i parse-cookie-string` or `yarn add parse-cookie-string`.

### Example

```
import { parseCookieString } from 'parse-cookie-string'; const cookies = parseCookieString(cookieString);

input: "userid=10; theme=default; jwt=somevalue"
output: {
  userId: 10,
  theme: default,
  jwt: somevalue
}
```

### Typescript

Pass a generic to type the return value like this:

```
parseCookieString<{ jwt: string }>(cookies)
```
