import { ReactNode } from 'react'

import 'assets/styles/components/common/modal.scss'

type Props = {
    title : string
   isOpen: boolean
   children: ReactNode
   close: () => void
}

const Modal = ({ title, isOpen, children, close }: Props) => {
   const onModalClickHandler = (e: any) => {
      e.stopPropagation()
   }

   return (
      <div className={`modal-layout ${isOpen ? 'active' : ''}`}>
         <div className='modal-background' onClick={close}>
            <div className='modal-wrapper'>
               <div className='modal' onClick={onModalClickHandler}>
                  <div className='modal__header'>
                     <h3 className='modal__title'>{title}</h3>
                     <div className='modal__close-button' role='button' onClick={close}>
                        <svg
                           width='24'
                           height='24'
                           viewBox='0 0 24 24'
                           fill='currentColor'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L12 10.5858L19.2929 3.29289C19.6834 2.90237 20.3166 2.90237 20.7071 3.29289C21.0976 3.68342 21.0976 4.31658 20.7071 4.70711L13.4142 12L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L12 13.4142L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929L10.5858 12L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z'
                           />
                        </svg>
                     </div>
                  </div>
                  <div className='modal__content-wrapper'>{children}</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal
