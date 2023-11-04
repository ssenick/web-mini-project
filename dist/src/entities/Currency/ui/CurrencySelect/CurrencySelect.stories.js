import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { CurrencySelect } from './CurrencySelect';
var meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
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
