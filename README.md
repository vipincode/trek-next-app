# Docs

## Next Auth Useful Resources

[Link](https://refine.dev/blog/nextauth-google-github-authentication-nextjs/#introduction)
[Link](https://www.youtube.com/watch?v=w2h54xz6Ndw)
[Link](https://www.youtube.com/watch?v=9bV_x2jxLFQ)
[Role based Auth](https://www.youtube.com/watch?v=ay-atEUGIc4)

## `openssl rand -base64 32` create random code

## GIT API

- `http://localhost:3000/api/auth/providers`
- `https://github.com/nextauthjs/next-auth/discussions/7491`

## Making Post Method

```ts
import { NextResponse } from 'next/server'

export const signup = async (body: UserProps) => {
	const res = await fetch('/api/signup', {
		method: 'POST',
		body: body && JSON.stringify(body),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})

	if (!res.ok) {
		throw new Error('API Error')
	}

	const data = await res.json()

	return NextResponse.json(data)
}
```
