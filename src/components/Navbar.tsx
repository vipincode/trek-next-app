import Link from 'next/link'

const Navbar = () => {
	return (
		<header className="flex justify-between items-center px-5 py-5 border-b border-gray-50/10">
			<Link href="/" className="text-[30px] font-medium">
				Logo
			</Link>
			<nav className="flex items-center gap-6">
				<Link href="/signin">Sign in</Link>
				<Link href="/signup">Sign up</Link>
			</nav>
		</header>
	)
}

export default Navbar
