import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import { memo, Suspense, useEffect } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { useDispatch } from 'react-redux'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  isCloseModal?: boolean
}

export const LoginModal = memo(({ className, isOpen, onClose, isCloseModal }: LoginModalProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isOpen) {
      dispatch(loginActions.setUsername(''))
      dispatch(loginActions.setPassword(''))
      dispatch(loginActions.setError(undefined))
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
