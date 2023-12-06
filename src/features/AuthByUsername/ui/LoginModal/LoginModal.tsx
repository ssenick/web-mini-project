import { memo, Suspense } from 'react'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginFormAsync } from '../LoginForm/LoginFormAsync'

interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  isCloseModal?: boolean
}

export const LoginModal = memo(({ className, isOpen, onClose, isCloseModal }: LoginModalProps) => {
  return (
        <Modal
            className={className}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            isCloseModal={isCloseModal}
        >
          <Suspense fallback={<LoaderPoints />}>
            <LoginFormAsync />
          </Suspense>
        </Modal>
  )
})
