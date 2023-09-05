'use client'
import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, MouseEvent, useState } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  isShowModal?: boolean
  nameBtn?: string
  urlCloseBtn?: string
}

export default function ButtonModal(props: ButtonProps) {
  const { className, isLoading, isShowModal, nameBtn, urlCloseBtn, disabled, children, ...restParams } = props
  const [showModal, setShowModal] = useState(isShowModal ? isShowModal : false)
  const newClassName = disabled ? className + ' cursor-not-allowed' : className
  const router = useRouter()

  const closePopupHanlder = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowModal(false)
    if (urlCloseBtn) router.push(urlCloseBtn)
  }

  return (
    <>
      <button className={newClassName} disabled={disabled} {...restParams} onClick={() => setShowModal(true)}>
        <span>{nameBtn}</span>
        {isLoading && (
          <svg
            aria-hidden='true'
            role='status'
            className='ml-2 mr-3 inline h-4 w-4 animate-spin fill-white'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='#E5E7EB'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentColor'
            />
          </svg>
        )}
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none duration-200'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <button
                  className='absolute top-2 left-2 border-0 text-14 leading-none font-semibold outline-none focus:outline-none'
                  onClick={closePopupHanlder}
                >
                  <svg
                    className='h-6 w-6 text-black'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' /> <line x1='18' y1='6' x2='6' y2='18' />{' '}
                    <line x1='6' y1='6' x2='18' y2='18' />
                  </svg>
                </button>
                {children}
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}