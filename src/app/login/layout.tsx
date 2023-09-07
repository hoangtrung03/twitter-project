import { globalString } from '../constants/constants'

export async function generateMetadata() {
  return {
    icons: {
      icon: '/favicon.ico'
    },
    title: `Log in to Twiter ${globalString.SITE_NAME}`,
    description:
      'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container p-4 md:p-0'>
      <div className='grid grid-cols-12 min-h-screen content-center'>
        <div className='md:col-span-6 col-span-12 relative md:pr-8'>
          <svg viewBox='0 0 24 24' aria-hidden='true' className='max-h-96 mx-auto'>
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>
        </div>
        <div className='md:col-span-6 col-span-12 md:pl-8'>
          <h1 className='md:text-6xl md:mb-12 font-bold'>Happening now</h1>
          <p className='md:text-3xl md:mb-8 font-bold'>Join today.</p>
          {children}
        </div>
      </div>
    </div>
  )
}
