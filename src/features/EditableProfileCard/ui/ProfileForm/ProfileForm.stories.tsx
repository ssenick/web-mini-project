import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import Avatar from 'shared/assets/test/image.jpg'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { ProfileForm } from './ProfileForm'

const meta: Meta<typeof ProfileForm> = {
  title: 'features/ProfileForm',
  component: ProfileForm,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}
}
export default meta

const initialForm = {
  first: 'Ruslan',
  lastname: 'Admin',
  age: 22,
  country: Country.Ukraine,
  currency: Currency.UAH,
  city: 'Sumy',
  username: 'ssenick',
  avatar: Avatar
}

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    form: initialForm
  }
}), RouterDecorator]

export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: initialForm
  }
}), RouterDecorator]

export const Funny: Story = {
  args: {}
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
  profile: {
    form: initialForm
  }
}), RouterDecorator]
export const Readonly: Story = {
  args: {}
}
Readonly.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    form: initialForm,
    readonly: true
  }
}), RouterDecorator]
