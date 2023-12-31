import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from './SideBar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  analytics : React.ReactNode,
  team : React.ReactNode,
  modal : React.ReactNode,

}) {

  
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Link href={"/login"}>
          See Login
        </Link>
        {/* <SideBar /> */}
        {children}
        {modal}
      </body>
    </html>
  )
}
