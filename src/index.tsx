import './shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/povaiders/ErrorBoundary';
import { StoreProvider } from '@/app/povaiders/StoreProvaider';
import { ThemeProvider } from '@/app/povaiders/ThemeProvaider';

import App from './app/App';
import { MediaQueryProvider } from './app/povaiders/MediaQueryProvaider';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to mount the application, check the container!');

const root = createRoot(container);

root.render(
   <BrowserRouter>
      <StoreProvider>
         <ErrorBoundary>
            <MediaQueryProvider>
               <ThemeProvider>
                  <App />
               </ThemeProvider>
            </MediaQueryProvider>
         </ErrorBoundary>
      </StoreProvider>
   </BrowserRouter>,
);
