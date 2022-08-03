import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap", justifyContent: "space-between", minHeight: "100vh"}}>
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}
