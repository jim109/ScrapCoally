
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '../store/Providers';
import { Init } from '../components/Init';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="es">
      <body className={inter.className}>
      <Providers>
        <Init />
        {children}
      </Providers>
      </body>
    </html>
  )
}
