import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Trek-app Authentication',
	description: 'Trek-app Authentication using Next.js',
}

export default function AuthRootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
