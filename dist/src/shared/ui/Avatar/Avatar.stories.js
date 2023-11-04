import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { Avatar } from './Avatar';
var meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {}
};
export default meta;
export var Clean = {
    args: {}
};
Clean.decorators = [ThemeDecorator(Theme.LIGHT)];
export var CleanDark = {
    args: {}
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Small = {
    args: {
        size: 50
    }
};
Small.decorators = [ThemeDecorator(Theme.LIGHT)];
