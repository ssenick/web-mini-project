import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCallback } from 'react'
import { counterActions } from '../model/slice/counterSlice'
import { Button } from 'shared/ui/Button/Button'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = useCallback(() => {
    dispatch(counterActions.increment())
  }, [dispatch])

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement())
  }, [dispatch])

  return (
        <div >
          <h1>
            {counterValue && counterValue}
          </h1>

          <Button onClick={increment}>
            +1
          </Button>
          <Button onClick={decrement}>
            -1
          </Button>
        </div>
  )
}
