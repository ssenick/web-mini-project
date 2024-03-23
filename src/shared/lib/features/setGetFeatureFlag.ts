import { type FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlag?: FeatureFlags): void {
   if (newFeatureFlag) {
      featureFlags = newFeatureFlag;
   }
}

export function getFeatureFlags(flag: keyof FeatureFlags): boolean | undefined {
   return featureFlags[flag];
}
