import './styles/index.scss'

import { AppRouter } from 'app/povaiders/Router'
import { getUserInited, userActions } from 'entities/User'
import { Suspense, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)
  /// === ////////
  const isPcScreen = useMediaQuery({ minWidth: 1200 })
  const isTabletScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 })
  const isMobilScreen = useMediaQuery({ maxWidth: 768, minWidth: 450 })
  const isXSMobilScreen = useMediaQuery({ maxWidth: 450 })
  /// === ////////

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  /// === ////////
  const mods: Mods = useMemo(() => ({
    isPcScreen,
    isTabletScreen,
    isMobilScreen,
    isXSMobilScreen
  }), [isPcScreen, isTabletScreen, isMobilScreen, isXSMobilScreen])
  /// === ////////

  return (
        <div className={classNames('app', mods, [])}>
            <Suspense fallback=''>
                <Header className='app__header'/>
                <Sidebar className='app__sidebar'/>
                {inited && <AppRouter className='app__content'/>}
            </Suspense>
        </div>
  )
}

export default App
