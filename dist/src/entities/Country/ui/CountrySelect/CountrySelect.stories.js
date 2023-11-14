import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { CountrySelect } from './CountrySelect';
var meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
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
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Funny = {
    args: {}
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
