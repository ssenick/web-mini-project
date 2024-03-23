import { type FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlags } from './setGetFeatureFlag';

interface toggleFeaturesProps<T> {
   name: keyof FeatureFlags;
   on: T;
   off: T;
}

export const toggleFeatures = <T>({ name, on, off }: toggleFeaturesProps<T>): T => {
   if (getFeatureFlags(name)) return on;

   return off;
};
