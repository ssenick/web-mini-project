import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render, type RenderResult } from '@testing-library/react'
import { type StateSchema, StoreProvider } from 'app/povaiders/StoreProvaider'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}): RenderResult {
  const {
    route = '/',
    initialState,
    asyncReducers
  } = options

  return render(
      <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
      </MemoryRouter>
  )
}
