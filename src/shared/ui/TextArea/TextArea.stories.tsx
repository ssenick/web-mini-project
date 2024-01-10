import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'shared/TextArea',
  component: TextArea,
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
  },
  render: () => {
    return <div className={'app__content'}>
          <TextArea placeholder={'Placeholder'}/>
      </div>
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
  },
  render: () => {
    return <div className={'app__content'}>
            <TextArea placeholder={'Placeholder'}/>
        </div>
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args: {
  },
  render: () => {
    return <div className={'app__content'}>
            <TextArea placeholder={'Placeholder'}/>
        </div>
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]

export const Value: Story = {
  args: {
  },
  render: () => {
    return <div className={'app__content'}>
            <TextArea placeholder={'Placeholder'} value={'Lasd asdkajsldjas asdjk anskjdasd kasjd kjas'}/>
        </div>
  }
}
Value.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Label: Story = {
  args: {
  },
  render: () => {
    return <div className={'app__content'}>
            <TextArea label={'Label label'} placeholder={'Placeholder'} value={'Lasd asdkajsldjas asdjk anskjdasd kasjd kjas'}/>
        </div>
  }
}
Label.decorators = [ThemeDecorator(Theme.LIGHT)]
