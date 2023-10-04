import cls from './Sidebar.module.scss';
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
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var LightCollapsed = {
    args: {
        className: "app__sidebar ".concat(cls.collapsed)
    }
};
LightCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var Dark = {
    args: {
        className: 'app__sidebar'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
export var DarkCollapsed = {
    args: {
        className: "app__sidebar ".concat(cls.collapsed)
    }
};
DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
