import { memo, useCallback, useMemo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { useMediaQueryValues } from '@/app/povaiders/MediaQueryProvaider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Modal } from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text, TextFontSize } from '@/shared/ui/Text/Text';
import { TextArea } from '@/shared/ui/TextArea/TextArea';

import cls from './Rating.module.scss';

interface RatingProps {
   className?: string;
   title?: string;
   feedbackTitle?: string;
   hasFeedback?: boolean;
   onCancel?: (startCount: number) => void;
   onAccept?: (startCount: number, feedback?: string) => void;
   rate?: number;
}

export const Rating = memo((props: RatingProps) => {
   const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;
   const { t } = useTranslation();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [startsCount, setStartsCount] = useState(rate);
   const [feedback, setFeedback] = useState('');
   const { isMobile } = useMediaQueryValues();

   const onSelectStars = useCallback(
      (selectedStartCount: number) => {
         setStartsCount(selectedStartCount);
         if (hasFeedback) {
            setIsModalOpen(true);
         } else {
            onAccept?.(selectedStartCount);
         }
      },
      [hasFeedback, onAccept],
   );

   const acceptHandler = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(startsCount, feedback);
   }, [feedback, startsCount, onAccept]);

   const cancelHandler = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(startsCount);
   }, [startsCount, onCancel]);

   const onChange = useCallback((value: string) => {
      setFeedback(value);
   }, []);

   const modalContent = useMemo(() => {
      return (
         <VStack gap={'15'} max>
            <Text size={TextFontSize.M} title={feedbackTitle} />
            <TextArea label={t('Ваш отзыв')} value={feedback} onChange={onChange} />
            <HStack gap={'15'} max>
               <Button max size={ButtonSize.M} variant={ButtonVariant.BORDER_ERROR} onClick={cancelHandler}>
                  {t('Закрыть')}
               </Button>
               <Button max size={ButtonSize.M} onClick={acceptHandler} variant={ButtonVariant.BORDER}>
                  {t('Отправить')}
               </Button>
            </HStack>
         </VStack>
      );
   }, [feedbackTitle, feedback, onChange, cancelHandler, acceptHandler, t]);

   if (isMobile) {
      return (
         <Card className={classNames(cls.Rating, {}, [className])}>
            <VStack gap={'15'} align={'center'}>
               <Text title={startsCount ? t('Спасибо за вашу оценку!') : title} size={TextFontSize.L} />
               <StarRating size={40} selectedStarts={startsCount} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
               <Modal isOpen={isModalOpen} onClose={cancelHandler} lazy>
                  {modalContent}
               </Modal>
            </BrowserView>
            <MobileView>
               <Drawer isOpen={isModalOpen} lazy>
                  {modalContent}
               </Drawer>
            </MobileView>
         </Card>
      );
   }

   return (
      <Card className={classNames(cls.Rating, {}, [className])}>
         <VStack gap={'15'} align={'center'}>
            <Text title={startsCount ? t('Спасибо за вашу оценку!') : title} size={TextFontSize.L} />
            <StarRating size={50} selectedStarts={startsCount} onSelect={onSelectStars} />
         </VStack>
         <BrowserView>
            <Modal isOpen={isModalOpen} onClose={cancelHandler} lazy>
               {modalContent}
            </Modal>
         </BrowserView>
         <MobileView>
            <Drawer isOpen={isModalOpen} lazy>
               {modalContent}
            </Drawer>
         </MobileView>
      </Card>
   );
});
