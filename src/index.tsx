import './shared/config/i18n/i18n'

import { ErrorBoundary } from 'app/povaiders/ErrorBoundary'
import { StoreProvider } from 'app/povaiders/StoreProvaider'
import { ThemeProvider } from 'app/povaiders/ThemeProvaider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to mount the application, check the container!')

const root = createRoot(container)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
