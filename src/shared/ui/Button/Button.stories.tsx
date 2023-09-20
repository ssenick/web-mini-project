import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button, ButtonSize, ButtonVariant } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import IconSun from 'shared/assets/icons/sun.svg'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Clean = Template.bind({})
Clean.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAN
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT)]

export const CleanDark = Template.bind({})
CleanDark.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAN
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Icon = Template.bind({})
Icon.args = {
  children: <IconSun/>,
  variant: ButtonVariant.THEME_ICON
}
Icon.decorators = [ThemeDecorator(Theme.LIGHT)]

export const IconDark = Template.bind({})
IconDark.args = {
  children: <IconSun/>,
  variant: ButtonVariant.THEME_ICON
}
IconDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND
}
Background.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Square = Template.bind({})
Square.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true
}
Square.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareDark = Template.bind({})
SquareDark.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true
}
SquareDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeSM = Template.bind({})
SizeSM.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.SM
}
SizeSM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SizeSMDark = Template.bind({})
SizeSMDark.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.SM
}
SizeSMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeXS = Template.bind({})
SizeXS.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.XS
}
SizeXS.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SizeXSDark = Template.bind({})
SizeXSDark.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.XS
}
SizeXSDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeM = Template.bind({})
SizeM.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.M
}
SizeM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SizeMDark = Template.bind({})
SizeMDark.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.M
}
SizeMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.L
}
SizeL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SizeLDark = Template.bind({})
SizeLDark.args = {
  children: '1',
  variant: ButtonVariant.BACKGROUND,
  square: true,
  size: ButtonSize.L
}
SizeMDark.decorators = [ThemeDecorator(Theme.DARK)]
