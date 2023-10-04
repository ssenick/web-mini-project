import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from 'app/povaiders/ThemeProvaider';
import { render } from 'react-dom';
import { StoreProvider } from 'app/povaiders/StorePorider';
import { ErrorBoundary } from 'app/povaiders/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './shared/config/i18n/i18n';
render(_jsx(StoreProvider, { children: _jsx(BrowserRouter, { children: _jsx(ErrorBoundary, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) }) }), document.getElementById('root'));
