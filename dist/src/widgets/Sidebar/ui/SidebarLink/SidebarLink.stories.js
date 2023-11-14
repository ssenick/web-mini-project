import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { SidebarLink } from './SidebarLink';
import ProfileIcon from 'shared/assets/icons/profile.svg';
var meta = {
    title: 'widgets/SidebarLink',
    component: SidebarLink,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {},
    args: {
        item: {
            path: '/',
            text: 'long link',
            Icon: ProfileIcon
        }
    }
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
export var Clean = {
    args: {}
};
Clean.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator];
export var CleanDark = {
    args: {}
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator];
export var CleanFunny = {
    args: {}
};
CleanFunny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(initialState), RouterDecorator];
export var CleanCollapsed = {
    args: {
        collapsed: true
    }
};
CleanCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator];
export var CleanCollapsedDark = {
    args: {
        collapsed: true
    }
};
CleanCollapsedDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator];
export var CleanCollapsedFunny = {
    args: {
        collapsed: true
    }
};
CleanCollapsedFunny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(initialState), RouterDecorator];
