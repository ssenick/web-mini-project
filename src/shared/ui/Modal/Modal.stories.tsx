import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { Modal } from './Modal'
import cls from './Modal.module.scss'
const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {
  },
  args: {
    className: cls.isOpen,
    children: 'Modal text content'
  }
}
export default meta

type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  args: {
  }
}
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ModalDark: Story = {
  args: {
  }
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
