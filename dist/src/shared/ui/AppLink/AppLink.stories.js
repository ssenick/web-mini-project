import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
var meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
        variant: AppLinkVariant.CLEAN,
        children: 'Text link'
    }
};
export default meta;
export var Clean = {
    args: {}
};
Clean.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var Active = {
    args: {
        className: 'active'
    }
};
Active.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var Dark = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
export var Funny = {
    args: {}
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), RouterDecorator];
