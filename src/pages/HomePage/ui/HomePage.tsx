import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Counter } from '@/entities/Counter'
import { Button, ButtonVariant } from '@/shared/ui/Button/Button'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { Page } from '@/widgets/Page'

const HomePage = memo((): JSX.Element => {
  const { t } = useTranslation('home')
  const [isOpen, setIsOpen] = useState(false)

  return (
        <Page title={t('Заголовок страницы')}>
            <div >
                <Counter/>
                <Button variant={ButtonVariant.BACKGROUND} onClick={() => { setIsOpen(true) }}>212122121</Button>
                <Drawer isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
                    11111
                </Drawer>
            </div>
        </Page>
  )
})

export default HomePage
