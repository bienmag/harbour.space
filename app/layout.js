import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Harbour.Space Apprenticeships',
  description: 'A full funded work-study program to launch your tech career',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
