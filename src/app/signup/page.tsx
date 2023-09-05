'use client'

import Link from 'next/link'
import Button from '../components/Button/Button'
import ButtonModal from '../components/ButtonModal/ButtonModal'

export default function Signup() {
  return (
    <div className='container'>
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
          <div className='flex flex-col max-w-xs items-start'>
            <Button className='border px-4 h-10 rounded-full text-14 w-full mb-4 hover:bg-blue-50 hover:border-blue-100 duration-200 flex justify-center items-center gap-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' viewBox='0 0 24 24'>
                <path d='M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z'></path>
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
            <ButtonModal
              isShowModal={true}
              urlCloseBtn='/'
              nameBtn='Create account'
              className='font-semibold border px-4 h-10 rounded-full text-14 w-full mb-4 text-white bg-sky-500 hover:bg-sky-600 duration-200'
            >
              <div className='p-8'>Signup Modal</div>
            </ButtonModal>
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
