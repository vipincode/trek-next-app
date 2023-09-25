import { prisma } from '@/config/prisma'
import { createJWT, hashPassword } from '@/utils/auth'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
	const { email, password, name } = await request.json()

	const user = await prisma.user.create({
		data: {
			name: name,
			email: email,
			password: await hashPassword(password),
		},
	})

	const jwt = await createJWT(user)

	cookies().set({
		name: process.env.COOKIE_NAME!,
		value: jwt,
		path: '/',
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 7,
	})

	return NextResponse.json({ jwt }, { status: 200 })
}
