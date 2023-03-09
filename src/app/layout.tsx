import { Footer } from '@/layout/Footer/Footer'
import { Header } from '@/layout/Header/Header'
import './globals.css'
import { Providers } from './provider'
export const metadata = {
  title: 'Pad project',
  icons: null
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body >
        <Providers >
          <div className='_wrapperBody'>
            <Header />
            {children}
            <Footer></Footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
