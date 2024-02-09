import { type Reducer } from '@reduxjs/toolkit'
import { type ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { type ReduxStoreWithManager, type StateSchemaKey } from '@/app/povaiders/StoreProvaider'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

// type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps): JSX.Element => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey]
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {children}
      </>
  )
}
