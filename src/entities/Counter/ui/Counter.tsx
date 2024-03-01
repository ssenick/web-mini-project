import { useCallback, useState } from 'react'

import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter = (): JSX.Element => {
  // было
  // const dispatch = useDispatch()
  // const counterValue = useSelector(getCounterValue)
  const [inputValue, setInputValue] = useState(0)
  const counterValue = useCounterValue()
  const { decrement, increment, add } = useCounterActions()

  const onChangeInput = useCallback((value: string) => {
    const newValue = Number(value) ? Number(value) : undefined
    newValue && setInputValue(newValue)
  }, [])
  const handlerIncrement = useCallback(() => {
    increment()
  }, [increment])
  const handlerDecrement = useCallback(() => {
    decrement()
  }, [decrement])
  const handlerAdd = useCallback(() => {
    add(inputValue)
  }, [add, inputValue])
  // было
  // const increment = useCallback(() => {
  //   dispatch(counterActions.increment())
  // }, [dispatch])
  //
  // const decrement = useCallback(() => {
  //   dispatch(counterActions.decrement())
  // }, [dispatch])

  return (
        <VStack gap={'15'} data-testid='counter'>
            <Text data-testid='value' title={counterValue.toString()} />
            <VStack gap={'15'}>
                <HStack gap={'10'}>
                    <Button data-testid='btn-increment' variant={ButtonVariant.BACKGROUND} onClick={handlerIncrement}>
                        +1
                    </Button>
                    <Button data-testid='btn-decrement' variant={ButtonVariant.BACKGROUND} onClick={handlerDecrement}>
                        -1
                    </Button>
                </HStack>
                <HStack gap={'10'}>
                    <Input value={inputValue} onChange={onChangeInput}/>
                    <Button data-testid='btn-add' variant={ButtonVariant.BACKGROUND} size={ButtonSize.M} onClick={handlerAdd}>
                        ++
                    </Button>
                </HStack>
            </VStack>

        </VStack>
  )
}
