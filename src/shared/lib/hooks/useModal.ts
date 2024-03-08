import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
interface UseModalProps {
   onClose?: () => void;
   isOpen?: boolean;
   isCloseModal?: boolean;
   animationDelay?: number;
}

export function useModal(props: UseModalProps) {
   const { onClose, isOpen, animationDelay = 1000, isCloseModal } = props;
   const [isClosing, setIsClosing] = useState(false);
   const [isMounted, setIsMounted] = useState(false);
   const timeRef = useRef<ReturnType<typeof setTimeout>>();

   const closeHandler = useCallback((): void => {
      if (onClose) {
         setIsClosing(true);
         timeRef.current = setTimeout(() => {
            onClose();
            document.body.classList.remove('lock');
            setIsClosing(false);
         }, animationDelay);
      }
   }, [onClose, animationDelay]);

   const onContentClick = useCallback((e: React.MouseEvent): void => {
      e.stopPropagation();
   }, []);

   const onKeyDown = useCallback(
      (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            closeHandler();
         }
      },
      [closeHandler],
   );

   useEffect(() => {
      if (isCloseModal) {
         closeHandler();
      }
   }, [isCloseModal, closeHandler]);

   useEffect(() => {
      if (isOpen) {
         setIsMounted(true);
         document.body.classList.add('lock');
         window.addEventListener('keydown', onKeyDown);
      }

      return () => {
         if (timeRef.current) clearTimeout(timeRef.current);
         window.removeEventListener('keydown', onKeyDown);
         setIsMounted(false);
      };
   }, [isOpen, onKeyDown]);

   return {
      isClosing,
      isMounted,
      closeHandler,
      onContentClick,
   };
}
