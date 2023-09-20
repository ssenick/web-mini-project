import { ThemeProvider } from 'app/povaiders/ThemeProvaider'
import { render } from 'react-dom'
import { ErrorBoundary } from 'app/povaiders/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './app/styles/index.scss'
import './shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
