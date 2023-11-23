import type React from 'react'

export interface SidebarLinkType {
  path: string
  Icon?: React.VoidFunctionComponent<React.SVGProps<SVGSVGElement>> | undefined
  text: string
  authOnly?: boolean
}
