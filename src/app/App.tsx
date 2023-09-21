import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/povaiders/ThemeProvaider'
import { Header } from 'widgets/Header'
import { AppRouter } from 'app/povaiders/Router'
import { Sidebar } from 'widgets/Sidebar'

const App = (): JSX.Element => {
  const { theme } = useTheme()
  return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Header className='app__header'/>
                <Sidebar className='app__sidebar'/>
                <AppRouter className='app__content'/>
            </Suspense>
        </div>
  )
}

export default App
