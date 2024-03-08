import { memo } from 'react';

import { Flex, type FlexProps } from '../Flex/Flex';

type HStakeProps = Omit<FlexProps, 'direction'>;

export const HStack = memo((props: HStakeProps) => {
   return <Flex direction={'row'} {...props} />;
});
