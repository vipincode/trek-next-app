'use client'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const initial = { email: '', password: '' }

export default function SignIn() {
	const [formState, setFormState] = useState({ ...initial })
	const router = useRouter()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		try {
			signIn('credentials', {
				email: formState.email,
				password: formState.password,
				redirect: false,
			})
		} catch (error) {
			console.log(error)
		} finally {
			router.replace('/home')
			setFormState({ ...initial })
		}
	}

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form className="flex flex-col gap-4 w-full lg:w-[400px] min-h-[300px]">
				<Input
					value={formState.email}
					onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
					isRequired
					label="Email"
					placeholder="Enter your email"
					type="email"
				/>
				<Input
					value={formState.password}
					onChange={(e) => setFormState((s) => ({ ...s, password: e.target.value }))}
					isRequired
					label="Password"
					placeholder="Enter your password"
					type="password"
				/>
				<p className="text-center text-small">
					Need to create an account?{' '}
					<Link href="/signup" className="text-primary-500">
						Sign up
					</Link>
				</p>
				<div className="flex gap-2 justify-end">
					<Button fullWidth color="primary" onClick={handleSubmit}>
						Sign in
					</Button>
				</div>
			</form>
		</div>
	)
}
