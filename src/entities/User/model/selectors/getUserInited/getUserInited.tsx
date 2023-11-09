import { type StateSchema } from 'app/povaiders/StoreProvaider'

export const getUserInited = (state: StateSchema): boolean | undefined => state?.user?._inited
