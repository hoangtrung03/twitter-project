'use client'

import Link from 'next/link'
import Button from './components/Button/Button'

export default function Home() {
  return (
    <div className='container p-4 md:p-0'>
      <div className='grid grid-cols-12 min-h-screen content-start md:content-center p-5 md:p-0'>
        <div className='md:col-span-6 col-span-12 relative md:pr-8'>
          <svg viewBox='0 0 24 24' aria-hidden='true' className='max-h-11 md:max-h-96 md:mx-auto'>
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>
        </div>
        <div className='md:col-span-6 col-span-12 md:pl-8'>
          <h1 className='md:text-6xl md:mb-12 font-bold'>Happening now</h1>
          <p className='md:text-3xl md:mb-8 font-bold'>Join today.</p>
          <div className='flex flex-col max-w-xs items-start'>
            <Button className='border px-4 h-10 rounded-full text-14 w-full mb-4 hover:bg-blue-50 hover:border-blue-100 duration-200 flex justify-center items-center gap-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 128 128'>
                <path
                  fill='#fff'
                  d='M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z'
                />
                <path
                  fill='#e33629'
                  d='M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z'
                />
                <path
                  fill='#f8bd00'
                  d='M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z'
                />
                <path
                  fill='#587dbd'
                  d='M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z'
                />
                <path
                  fill='#319f43'
                  d='M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z'
                />
              </svg>
              <span>Sign up with Google</span>
            </Button>
            <Button className='font-semibold border px-4 h-10 rounded-full text-14 w-full mb-4 hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' viewBox='0 0 24 24'>
                <path d='M11.6734 7.2221C10.7974 7.2221 9.44138 6.2261 8.01338 6.2621C6.12938 6.2861 4.40138 7.3541 3.42938 9.0461C1.47338 12.4421 2.92538 17.4581 4.83338 20.2181C5.76938 21.5621 6.87338 23.0741 8.33738 23.0261C9.74138 22.9661 10.2694 22.1141 11.9734 22.1141C13.6654 22.1141 14.1454 23.0261 15.6334 22.9901C17.1454 22.9661 18.1054 21.6221 19.0294 20.2661C20.0974 18.7061 20.5414 17.1941 20.5654 17.1101C20.5294 17.0981 17.6254 15.9821 17.5894 12.6221C17.5654 9.8141 19.8814 8.4701 19.9894 8.4101C18.6694 6.4781 16.6414 6.2621 15.9334 6.2141C14.0854 6.0701 12.5374 7.2221 11.6734 7.2221ZM14.7934 4.3901C15.5734 3.4541 16.0894 2.1461 15.9454 0.850098C14.8294 0.898098 13.4854 1.5941 12.6814 2.5301C11.9614 3.3581 11.3374 4.6901 11.5054 5.9621C12.7414 6.0581 14.0134 5.3261 14.7934 4.3901Z'></path>
              </svg>
              <span>Sign up with Apple</span>
            </Button>
            <p className='text-center w-full relative line-left-right mb-4'>or</p>
            <Link
              href={'/signup'}
              className='font-semibold border px-4 h-10 rounded-full text-14 w-full mb-4 text-white bg-sky-500 hover:bg-sky-600 duration-200 flex justify-center items-center'
            >
              Create account
            </Link>
            <p className='text-10 text-gray-700 mb-10'>
              By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
            </p>
            <p className='font-semibold mb-4'>Already have an account?</p>
            <Link
              href={'/login'}
              className='font-semibold border px-4 h-10 rounded-full text-14 w-full mb-4 hover:bg-blue-50 hover:border-blue-100 duration-200 text-sky-500 flex justify-center items-center'
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
