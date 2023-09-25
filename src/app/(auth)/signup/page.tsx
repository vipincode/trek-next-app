'use client'

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signup } from '@/utils/api'

const initial = { name: '', email: '', password: '' }

export default function SignUp() {
	const [formState, setFormState] = useState({ ...initial })
	const router = useRouter()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		try {
			await signup(formState)
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
					value={formState.name}
					onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
					isRequired
					label="Name"
					placeholder="Enter your name"
					type="text"
				/>
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
					Already have an account?{' '}
					<Link href="/signin" className="text-primary-500">
						Login
					</Link>
				</p>
				<div className="flex gap-2 justify-end">
					<Button fullWidth color="primary" onClick={handleSubmit}>
						Sign up
					</Button>
				</div>
			</form>
		</div>
	)
}
