import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const [value, setValue] = useState('')
  const onToggleModal = useCallback((): void => {
    setIsAuthModal(prev => !prev)
  }, [])

  const inputOnChange = (val: string): void => {
    setValue(val)
  }
  return (
        <div>
            {t('Заголовок страницы')}
            <div>
                <Button variant={ButtonVariant.BACKGROUND} onClick={onToggleModal}>11111111</Button>
            </div>
            <Input value={value} onChange={inputOnChange}/>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                  <span>
                      {t('Modal window')}
                  </span>
            </Modal>
        </div>
  )
}

export default AboutPage
