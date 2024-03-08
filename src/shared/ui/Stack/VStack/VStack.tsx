import { memo } from 'react';

import { Flex, type FlexProps } from '../Flex/Flex';

type VStakeProps = Omit<FlexProps, 'direction'>;

export const VStack = memo((props: VStakeProps) => {
   return <Flex direction={'column'} align={'stretch'} {...props} />;
});
