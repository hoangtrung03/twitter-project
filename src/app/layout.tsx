import './globals.css'
import { Poppins } from 'next/font/google'
import { globalString } from './constants/constants'
import Providers from './utils/hoc/Provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export async function generateMetadata() {
  return {
    title: `X. It’s what’s happening ${globalString.SITE_NAME}`,
    description: 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <main>{children}</main>
        </Providers></body>
    </html>
  )
}
