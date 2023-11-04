import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
var meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        className: 'app__sidebar'
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'User'
            }
        }
    }, RouterDecorator)];
//
// export const LightCollapsed: Story = {
//
//   args: {
//     className: `app__sidebar ${cls.collapsed}`,
//     collapsedStorybook: true
//   }
//
// }
// LightCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]
//
// export const Dark: Story = {
//   args: {
//     className: 'app__sidebar'
//   }
// }
// Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]
//
// export const DarkCollapsed: Story = {
//
//   args: {
//     className: `app__sidebar ${cls.collapsed}`,
//     collapsedStorybook: true
//   }
//
// }
// DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]
