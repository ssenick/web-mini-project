import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import Avatar from 'shared/assets/test/image.jpg'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    form: {
      first: 'Ruslan',
      lastname: 'Admin',
      age: 22,
      country: Country.Ukraine,
      currency: Currency.UAH,
      city: 'Sumy',
      username: 'ssenick',
      avatar: Avatar
    },
    readonly: false
  }
}), RouterDecorator]

export const Dark: Story = {
  args: {
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(
  {
    profile: {
      form: {
        first: 'Ruslan',
        lastname: 'Admin',
        age: 22,
        country: Country.Ukraine,
        currency: Currency.UAH,
        city: 'Sumy',
        username: 'ssenick',
        avatar: Avatar
      },
      readonly: false
    }
  }
), RouterDecorator]
export const Funny: Story = {
  args: {
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(
  {
    profile: {
      form: {
        first: 'Ruslan',
        lastname: 'Admin',
        age: 22,
        country: Country.Ukraine,
        currency: Currency.UAH,
        city: 'Sumy',
        username: 'ssenick',
        avatar: Avatar
      },
      readonly: false
    }
  }
), RouterDecorator]
