import { screen } from '@testing-library/react'

import { AppRouter } from '@/app/povaiders/Router'
import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/config/routeConfig'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
describe('AppRouter.test', () => {
  test('Page render', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAbout()
    })
    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Page not found ', async () => {
    componentRender(<AppRouter/>, {
      route: '/asdasd'
    })
    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Redirecting an unauthorized user to the main page ', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteProfile('1')
    })
    const page = await screen.findByTestId('HomePage')
    expect(page).toBeInTheDocument()
  })

  test('User access to a private page ', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1'
          }
        }
      }
    })
    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Access denied if role is missing ', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1'
          }
        }
      }
    })
    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Access is allowed, the user has  a role', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
            roles: [
              UserRole.ADMIN
            ]
          }
        }
      }
    })
    const page = await screen.findByTestId('AdminPage')
    expect(page).toBeInTheDocument()
  })
})
