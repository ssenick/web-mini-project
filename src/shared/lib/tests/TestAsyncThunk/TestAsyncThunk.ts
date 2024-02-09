import { type AsyncThunkAction, type Dispatch } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'
import { type NavigateOptions, type To } from 'react-router'

import { type StateSchema } from '@/app/povaiders/StoreProvaider'

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch
  getState: () => StateSchema

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<(to: To, options?: NavigateOptions) => void>

  constructor (
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)

    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
        navigate: this.navigate
      })

    return result
  }
}
