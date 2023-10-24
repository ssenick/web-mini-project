import { memo, Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { Modal } from 'shared/ui/Modal/Modal'
import { loginActions } from '../../model/slice/loginSlice'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'

interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  isCloseModal?: boolean
}

export const LoginModal = memo(({ className, isOpen, onClose, isCloseModal }: LoginModalProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!isOpen) {
      dispatch(loginActions.setUsername(''))
      dispatch(loginActions.setPassword(''))
      dispatch(loginActions.setError())
    }
  }, [dispatch, isOpen])

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
