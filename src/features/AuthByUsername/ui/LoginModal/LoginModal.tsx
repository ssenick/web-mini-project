import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import { useEffect } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { useDispatch } from 'react-redux'
interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  isCloseModal?: boolean
}

export const LoginModal = ({ className, isOpen, onClose, isCloseModal }: LoginModalProps): JSX.Element => {
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
            <LoginForm/>
        </Modal>
  )
}
