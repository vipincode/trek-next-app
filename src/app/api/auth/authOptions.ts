import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// https://next-auth.js.org/configuration/providers/credentials
				const response = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
					method: 'POST',
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password,
					}),
					headers: { 'Content-Type': 'application/json' },
				})
				const user = await response.json()
				if (response.ok && user) {
					return user
				}
				return null
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
}
