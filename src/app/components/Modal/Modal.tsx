'use client'

interface ModalProps {
  children?: React.ReactNode
  closePopupHanlder: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Modal(props: ModalProps) {
  const { children, closePopupHanlder } = props
  return (
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
  )
}
