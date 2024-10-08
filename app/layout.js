'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import './globals.css';


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isSpecificPage = pathname === '/tutorials' || pathname === '/projects';
  const isAboutPage = pathname === '/about'; 

  return (
    <html lang="en">
      <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
       <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="container">
      <SessionProvider>
        <header className="header">
          <nav className="nav">
            <div className="logo-container">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="logo" />
            </div>
            <Link href="/" passHref>
              <p className="nav-link">Home</p>
            </Link>
            <Link href="/tutorials" passHref>
              <p className="nav-link">Tutorials</p>
            </Link>
            <Link href="/projects" passHref>
              <p className="nav-link">My Projects</p>
            </Link>
            <Link href="/about" passHref>
              <p className="nav-link">About me</p>
            </Link>
          </nav>
        </header>
        <main className={isSpecificPage ? '' : isAboutPage ? 'about-main' : 'maina'}>
          {children}
        </main>
        <footer className="footer">
          <p>© 2024 Franco Seiler all rights reserved</p>
        </footer>
      </SessionProvider>
      </body>
    </html>
  );
}
