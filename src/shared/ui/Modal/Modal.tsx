import { type ReactNode, useMemo } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';

import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
   className?: string;
   children?: ReactNode;
   isOpen?: boolean;
   onClose?: () => void;
   lazy?: boolean;
   isCloseModal?: boolean;
   animationDelay?: number;
}

export const Modal = (props: ModalProps): JSX.Element | null => {
   const { className, children, isOpen, onClose, lazy, isCloseModal, animationDelay = 1000 } = props;
   const { isMounted, isClosing, onContentClick, closeHandler } = useModal({
      onClose,
      isOpen,
      isCloseModal,
      animationDelay,
   });

   //
   // const [isClosing, setIsClosing] = useState(false)
   // const [isMounted, setIsMounted] = useState(false)
   // const timeRef = useRef<ReturnType<typeof setTimeout>>()
   //
   // const closeHandler = useCallback((): void => {
   //   if (onClose) {
   //     setIsClosing(true)
   //     timeRef.current = setTimeout(() => {
   //       onClose()
   //       document.body.classList.remove('lock')
   //       setIsClosing(false)
   //     }, 1000)
   //   }
   // }, [onClose])
   //
   // const onContentClick = useCallback((e: React.MouseEvent): void => {
   //   e.stopPropagation()
   // }, [])
   //
   // const onKeyDown = useCallback((e: KeyboardEvent) => {
   //   if (e.key === 'Escape') {
   //     closeHandler()
   //   }
   // }, [closeHandler])
   //
   // useEffect(() => {
   //   if (isOpen) setIsMounted(true)
   //   return () => { setIsMounted(false) }
   // }, [isOpen])
   //
   // useEffect(() => {
   //   if (isCloseModal) {
   //     closeHandler()
   //   }
   // }, [isCloseModal, closeHandler])
   //
   // useEffect(() => {
   //   if (isOpen) {
   //     document.body.classList.add('lock')
   //     window.addEventListener('keydown', onKeyDown)
   //   }
   //   return () => {
   //     if (timeRef.current) clearTimeout(timeRef.current)
   //     window.removeEventListener('keydown', onKeyDown)
   //   }
   // }, [isOpen, onKeyDown])

   const mods: Mods = useMemo(
      () => ({
         [cls.isOpen]: isOpen,
         [cls.isClose]: isClosing,
      }),
      [isOpen, isClosing],
   );

   if (lazy && !isMounted) return null;

   return (
      <Portal>
         <div data-testid="modal" className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
               <div className={cls.content} onClick={onContentClick}>
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   );
};
