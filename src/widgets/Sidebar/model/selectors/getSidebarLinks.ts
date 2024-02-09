import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import { RoutPath } from '@/shared/config/routeConfig'

import { type SidebarLinkType } from '../types/sidebar'

export const getSidebarLinks = createSelector(
  getUserAuthData,
  (userData) => {
    const SidebarLinksList: SidebarLinkType[] = [
      {
        path: RoutPath.main,
        Icon: HomeIcon,
        text: 'Главная'
      },
      {
        path: RoutPath.about,
        Icon: AboutIcon,
        text: 'О Сайте'
      }
    ]
    if (userData) {
      SidebarLinksList.push(
        {
          path: RoutPath.profile + userData.id,
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
      )
    }
    return SidebarLinksList
  }
)
