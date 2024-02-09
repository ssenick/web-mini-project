import { useDispatch } from 'react-redux'

import { type AppDispatch } from '@/app/povaiders/StoreProvaider'

export const useAppDispatch: () => AppDispatch = useDispatch
