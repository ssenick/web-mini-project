import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonVariant } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {

  }
}
export default meta

type Story = StoryObj<typeof meta>

export const CleanLight: Story = {
  args: {
    variant: ButtonVariant.CLEAN,
    children: 'TEXT'
  }
}
CleanLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const CleanDark: Story = {
  args: {
    variant: ButtonVariant.CLEAN,
    children: 'TEXT'
  }
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK)]

export const IconLight: Story = {
  args: {
    variant: ButtonVariant.THEME_ICON,
    children: <MoonIcon/>
  }
}
IconLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const IconDark: Story = {
  args: {
    variant: ButtonVariant.THEME_ICON,
    children: <SunIcon/>
  }
}
IconDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundLight: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: 'TEXT'
  }
}
BackgroundLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BackgroundDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: 'TEXT'
  }
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareXSLight: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.XS
  }
}
SquareXSLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareXSDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.XS
  }
}
SquareXSDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSMLight: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.SM
  }
}
SquareSMLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSMDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.SM
  }
}
SquareSMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeMLight: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.M
  }
}
SquareSizeMLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSizeMDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.M
  }
}
SquareSizeMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeLLight: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.L
  }
}
SquareSizeLLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSizeLDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.L
  }
}
SquareSizeLDark.decorators = [ThemeDecorator(Theme.DARK)]
