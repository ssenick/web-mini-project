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

export const Clean: Story = {
  args: {
    variant: ButtonVariant.CLEAN,
    children: 'TEXT'
  }
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT)]

export const CleanDark: Story = {
  args: {
    variant: ButtonVariant.CLEAN,
    children: 'TEXT'
  }
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Icon: Story = {
  args: {
    variant: ButtonVariant.THEME_ICON,
    children: <MoonIcon/>
  }
}
Icon.decorators = [ThemeDecorator(Theme.LIGHT)]

export const IconDark: Story = {
  args: {
    variant: ButtonVariant.THEME_ICON,
    children: <SunIcon/>
  }
}
IconDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: 'TEXT'
  }
}
Background.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BackgroundDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: 'TEXT'
  }
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Disabled: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: 'TEXT',
    disabled: true
  }
}
Disabled.decorators = [ThemeDecorator(Theme.LIGHT)]

export const DisabledDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: 'TEXT',
    disabled: true
  }
}
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Border: Story = {
  args: {
    variant: ButtonVariant.BORDER,
    children: 'TEXT'
  }
}
Border.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BorderDark: Story = {
  args: {
    variant: ButtonVariant.BORDER,
    children: 'TEXT'
  }
}

export const BorderError: Story = {
  args: {
    variant: ButtonVariant.BORDER_ERROR,
    children: 'TEXT'
  }
}
BorderError.decorators = [ThemeDecorator(Theme.LIGHT)]

BorderDark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithIcon: Story = {
  args: {
    variant: ButtonVariant.BORDER,
    withIcon: true,
    children: <><MoonIcon/><span>TEXT</span></>
  }
}
WithIcon.decorators = [ThemeDecorator(Theme.LIGHT)]

export const WithIconDark: Story = {
  args: {
    variant: ButtonVariant.BORDER,
    withIcon: true,
    children: <><MoonIcon/><span>TEXT</span></>

  }
}
WithIconDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareXS: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.XS
  }
}
SquareXS.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareXSDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.XS
  }
}
SquareXSDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSM: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.SM
  }
}
SquareSM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSMDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.SM
  }
}
SquareSMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeM: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.M
  }
}
SquareSizeM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSizeMDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.M
  }
}
SquareSizeMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeL: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.L
  }
}
SquareSizeL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSizeLDark: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: '1',
    square: true,
    size: ButtonSize.L
  }
}
SquareSizeLDark.decorators = [ThemeDecorator(Theme.DARK)]
