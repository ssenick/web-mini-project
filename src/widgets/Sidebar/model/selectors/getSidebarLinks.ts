import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/config/routeConfig'

import { type SidebarLinkType } from '../types/sidebar'

export const getSidebarLinks = createSelector(
  getUserAuthData,
  (userData) => {
    const SidebarLinksList: SidebarLinkType[] = [
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'Главная'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О Сайте'
      }
    ]
    if (userData) {
      SidebarLinksList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true
        }
      )
    }
    return SidebarLinksList
  }
)
