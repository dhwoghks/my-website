import Link from "next/link";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/account">Account</Link>
        </div>
        {children}
      </body>
    </html>
  )
} 