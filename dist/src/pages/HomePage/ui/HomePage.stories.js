import HomePage from './HomePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
var meta = {
    title: 'pages/HomePage',
    component: HomePage,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator];
export var Dark = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator];
export var Funny = {
    args: {}
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator];
