import {
  // getAddNewCommentFormError,
  getAddNewCommentFormText
} from 'features/AddNewCommentForm/model/selectors/addNewCommentFormSelectors'
import { sendComment } from '../../model/services/sendComments'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { TextArea } from 'shared/ui/TextArea/TextArea'
import { addNewCommentFormActions, addNewCommentFormReducer } from '../../model/slice/addNewCommentFormSlice'
import cls from './AddNewCommentForm.module.scss'

interface AddNewCommentFormProps {
  className?: string
}

const reducers: ReducersList = {
  addCommentForm: addNewCommentFormReducer
}

const AddNewCommentForm = memo(({ className }: AddNewCommentFormProps) => {
  const { t } = useTranslation()
  const text = useSelector(getAddNewCommentFormText)
  // const error = useSelector(getAddNewCommentFormError)
  /// / TESTSTSTTSTSTATSTSTSTSTS
  const dispatch = useAppDispatch()

  const onChange = useCallback((value: string) => {
    dispatch(addNewCommentFormActions.setText(value))
  }, [dispatch])

  const onSendComment = useCallback(() => {
    void dispatch(sendComment())
  }, [dispatch])
  return (
      <DynamicModuleLoader reducers={reducers}>
          <div className={classNames(cls.AddNewCommentForm, {}, [className])}>
              <TextArea className={cls.textarea} onChange={onChange} value={text} placeholder={t('Напишите комментарий')}/>
              <div className={cls.bottom }>
                  <Button
                      onClick={onSendComment}
                      className={cls.button}
                      variant={ButtonVariant.BACKGROUND}>{t('Отправить комментарий')}</Button>
              </div>
          </div>
      </DynamicModuleLoader>
  )
})
export default AddNewCommentForm
