import { type FC, type SVGProps } from 'react';

export interface SidebarLinkType {
   path: string;
   Icon?: FC<SVGProps<SVGElement>> | undefined;
   text: string;
   authOnly?: boolean;
}
