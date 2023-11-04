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
export default meta;
export var Clean = {
    args: {}
};
Clean.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var CleanDark = {
    args: {}
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
export var CleanCollapsed = {
    args: {
        collapsed: true
    }
};
CleanCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var CleanCollapsedDark = {
    args: {
        collapsed: true
    }
};
CleanCollapsedDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
