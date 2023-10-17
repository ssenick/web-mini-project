import type React from 'react'
import { RoutPath } from 'shared/config/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarLinkType {
  path: string
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
  text: string
}

export const SidebarLinkList: SidebarLinkType[] = [
  {
    path: RoutPath.main,
    Icon: HomeIcon,
    text: 'Главная'
  },
  {
    path: RoutPath.about,
    Icon: AboutIcon,
    text: 'О Сайте'
  },
  {
    path: RoutPath.profile,
    Icon: ProfileIcon,
    text: 'Профиль'
  }
]
