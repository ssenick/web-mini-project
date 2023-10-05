import { Header } from './Header';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
var meta = {
    title: 'widgets/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        className: 'app__header'
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator()];
export var Dark = {
    args: {
        className: 'app__header'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator, StoreDecorator()];
