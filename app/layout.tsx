import '../styles/globals.css';

import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and Discover developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
