import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
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
var initialState = {
    user: {
        authData: {
            id: '1',
            username: 'User'
        }
    }
};
export default meta;
export var Light = {
    args: {
        className: 'app__sidebar'
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator];
export var LightCollapsed = {
    args: {
        className: "app__sidebar ".concat(cls.collapsed),
        collapsedStorybook: true
    }
};
LightCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator];
export var Dark = {
    args: {
        className: 'app__sidebar'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator];
export var DarkCollapsed = {
    args: {
        className: "app__sidebar ".concat(cls.collapsed),
        collapsedStorybook: true
    }
};
DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator];
export var Funny = {
    args: {
        className: 'app__sidebar'
    }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(initialState), RouterDecorator];
export var FunnyCollapsed = {
    args: {
        className: "app__sidebar ".concat(cls.collapsed),
        collapsedStorybook: true
    }
};
FunnyCollapsed.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(initialState), RouterDecorator];
