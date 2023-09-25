import { NextResponse } from 'next/server'
const fetcher = async ({ url, method, body, json = true }: any) => {
	const res = await fetch(url, {
		method,
		body: body && JSON.stringify(body),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})

	if (!res.ok) {
		throw new Error('API Error')
	}

	if (json) {
		const data = await res.json()
		console.log(data)
		return data
	}
}

export const signup = async (user: UserProps) => {
	return fetcher({
		url: '/api/signup',
		method: 'POST',
		body: user,
		json: false,
	})
}
