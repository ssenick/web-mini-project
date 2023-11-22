import { type AddNewCommentFormProps } from './AddNewCommentForm'
import { type FC, lazy } from 'react'
export const AddNewCommentFormAsync = lazy<FC<AddNewCommentFormProps>>(async () => await import('./AddNewCommentForm'))
