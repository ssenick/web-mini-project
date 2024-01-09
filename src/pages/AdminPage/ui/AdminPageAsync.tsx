import { lazy } from 'react'
export const AdminPageAsync = lazy(async () => await import('./AdminPage'))
