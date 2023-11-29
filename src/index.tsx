import { ErrorBoundary } from 'app/povaiders/ErrorBoundary'
import { StoreProvider } from 'app/povaiders/StoreProvaider'
import { ThemeProvider } from 'app/povaiders/ThemeProvaider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>,
    document.getElementById('root')
)
