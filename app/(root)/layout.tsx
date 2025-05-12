import { Button } from '@/components/ui/button'
import { isAuthenticated, logout } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout = async ({children} : {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in')
  return (
    <div className='root-layout'>
      <nav className='flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.svg" alt='logo' width={38} height={32} />
          <h2 className='text-primary-100'>PrepPilot</h2>
        </Link>

        <Button onClick={logout}>Logout</Button>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout