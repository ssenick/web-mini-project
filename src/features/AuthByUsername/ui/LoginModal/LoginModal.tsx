import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps): JSX.Element => {
  return (
        <Modal
            className={className}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm/>
        </Modal>
  )
}
