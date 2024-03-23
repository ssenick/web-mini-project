import { type ReactElement } from 'react';

import { type FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlags } from '..';

interface ToggleFeaturesProps {
   feature: keyof FeatureFlags;
   on: ReactElement;
   off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps): ReactElement => {
   const { feature, on, off } = props;

   if (getFeatureFlags(feature)) return on;

   return off;
};
