import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback((): void => {
    setIsAuthModal(prev => !prev)
  }, [])
  return (
        <div>
            {t('Заголовок страницы')}
            <div>
                <Button variant={ButtonVariant.BACKGROUND} onClick={onToggleModal}>11111111</Button>
            </div>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                  <span>
                      {t('Modal window')}
                  </span>
            </Modal>
        </div>
  )
}

export default AboutPage
