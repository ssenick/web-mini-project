import { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { AppRouter } from 'app/povaiders/Router'
import { Sidebar } from 'widgets/Sidebar'
import { userActions } from 'entities/User'
import { useDispatch } from 'react-redux'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <Header className='app__header'/>
                <Sidebar className='app__sidebar'/>
                <AppRouter className='app__content'/>
            </Suspense>
        </div>
  )
}

export default App
