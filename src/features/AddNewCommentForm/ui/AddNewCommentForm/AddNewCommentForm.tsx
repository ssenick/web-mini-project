import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { TextArea } from 'shared/ui/TextArea/TextArea'

import { getAddNewCommentFormError, getAddNewCommentFormIsLoading, getAddNewCommentFormText } from '../../model/selectors/addNewCommentFormSelectors'
import { addNewCommentFormActions, addNewCommentFormReducer } from '../../model/slice/addNewCommentFormSlice'
import cls from './AddNewCommentForm.module.scss'

export interface AddNewCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addNewCommentFormReducer
}

const AddNewCommentForm = memo(({ className, onSendComment }: AddNewCommentFormProps) => {
  const { t } = useTranslation()
  const text = useSelector(getAddNewCommentFormText)
  const error = useSelector(getAddNewCommentFormError)
  const isLoading = useSelector(getAddNewCommentFormIsLoading)
  const dispatch = useAppDispatch()

  const onChangeCommentArea = useCallback((value: string) => {
    dispatch(addNewCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    if (text) {
      onSendComment(text || '')
      onChangeCommentArea('')
    }
  }, [onSendComment, onChangeCommentArea, text])

  if (error) {
    return (
        <div className={classNames(cls.AddNewCommentForm, { [cls.isLoading]: isLoading }, [className])}>
            {t('что-то пошло не так')}
        </div>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers}>
          <div className={classNames(cls.AddNewCommentForm, { [cls.isLoading]: isLoading }, [className])}>
              <Text className={cls.title} size={TextFontSize.L} title={`${t('Комментарии')}:`}/>
              <div className={cls.wrapper}>
                  <TextArea className={cls.textarea} onChange={onChangeCommentArea} value={text} placeholder={t('Напишите комментарий')}/>
                  {isLoading && <LoaderPoints className={cls.loader}/>}
              </div>
              <div className={cls.bottom }>
                  <Button
                      onClick={onSendHandler}
                      className={cls.button}
                      variant={ButtonVariant.BACKGROUND}>
                      {t('Отправить комментарий')}
                  </Button>
              </div>
          </div>
      </DynamicModuleLoader>
  )
})
export default AddNewCommentForm
