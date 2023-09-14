import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'

import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal'
import LoginModal from './components/modals/LoginModal'

import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  console.log(currentUser)
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
