import { ThemeProvider } from 'app/povaiders/ThemeProvaider'
import { render } from 'react-dom'
import { StoreProvider } from 'app/povaiders/StorePorider'
import { ErrorBoundary } from 'app/povaiders/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './shared/config/i18n/i18n'

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
