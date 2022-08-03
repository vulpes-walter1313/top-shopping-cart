import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
