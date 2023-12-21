import { type StateSchema } from 'app/povaiders/StoreProvaider'
import {
  getAddNewCommentFormError,
  getAddNewCommentFormIsLoading, getAddNewCommentFormText
} from './addNewCommentFormSelectors'

describe('addNewCommentFormSelectors.test', () => {
  test('isLoading should return true', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        isLoading: true
      }
    }
    expect(getAddNewCommentFormIsLoading(state as StateSchema)).toEqual(true)
  })
  test('error should return "error" ', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error'
      }
    }
    expect(getAddNewCommentFormError(state as StateSchema)).toEqual('error')
  })
  test('error should return "text" ', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'text'
      }
    }
    expect(getAddNewCommentFormText(state as StateSchema)).toEqual('text')
  })
})
