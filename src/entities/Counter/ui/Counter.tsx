import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, ButtonVariant } from '@/shared/ui/Button/Button'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter = (): JSX.Element => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = useCallback(() => {
    dispatch(counterActions.increment())
  }, [dispatch])

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement())
  }, [dispatch])

  return (
        <div data-testid='counter'>
          <h1 data-testid='value'>
            {counterValue}
          </h1>

          <Button data-testid='btn-increment' variant={ButtonVariant.BACKGROUND} onClick={increment}>
            +1
          </Button>
          <Button data-testid='btn-decrement' variant={ButtonVariant.BACKGROUND} onClick={decrement}>
            -1
          </Button>
        </div>
  )
}
