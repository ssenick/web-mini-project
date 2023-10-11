import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  isCloseModal?: boolean
}

export const LoginModal = ({ className, isOpen, onClose, isCloseModal }: LoginModalProps): JSX.Element => {
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
