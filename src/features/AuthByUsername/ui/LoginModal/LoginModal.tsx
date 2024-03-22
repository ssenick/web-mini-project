import { memo } from 'react';

import { Modal } from '@/shared/ui/Modal/Modal';

import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
   className?: string;
   isOpen?: boolean;
   onClose?: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => {
   return (
      <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
         <LoginFormAsync />
      </Modal>
   );
});
