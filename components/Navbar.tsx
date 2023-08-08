import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { NavLinks } from '@/constants'
import { AuthProviders } from '@/components'

const Navbar = () => {
  const session = {};

  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-0">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Flexibble"
                    width={115}
                    height={80}
                ></Image>
            </Link>
            <ul className="xl:flex hidden text-small gap-9">
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>{link.text}</Link>
                ))}
            </ul>
        </div>
        <div className="flexCenter gap-4">
            { session ? (
                <>
                    <Link href="/create-project">CREATE PROJECT</Link>
                </>
            ) : (
                <AuthProviders/>
            )}
        </div>
    </nav>
  )
}

export default Navbar