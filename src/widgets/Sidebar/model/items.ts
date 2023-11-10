import type React from 'react'

import { RoutPath } from 'shared/config/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'

export interface SidebarLinkType {
  path: string
  Icon?: React.VoidFunctionComponent<React.SVGProps<SVGSVGElement>> | undefined
  text: string
  authOnly?: boolean
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
    text: 'Профиль',
    authOnly: true
  },
  {
    path: RoutPath.articles,
    Icon: ArticlesIcon,
    text: 'Статьи',
    authOnly: true
  }
]
