// import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
// import { Text } from 'shared/ui/Text/Text'
// import { Button, ButtonVariant } from 'shared/ui/Button/Button'
// import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps): JSX.Element => {
  // const { t } = useTranslation()
  const data = useSelector(getProfileData)
  // const error = useSelector(getProfileError)
  // const isLoading = useSelector(getProfileIsLoading)

  return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
          {/*   <div className={cls.header}> */}
          {/*     <Text title={'Профиль'}/> */}
          {/*     <Button variant={ButtonVariant.BACKGROUND}> */}
          {/*       {'Редактировать'} */}
          {/*     </Button> */}
          {/*   </div> */}
          {/* <div className={cls.data}> */}
          {/*   <Input value={data?.first}/> */}
          {/*   <Input value={data?.lastname}/> */}
          {/* </div> */}
            {JSON.stringify(data?.first)}
        </div>
  )
}
