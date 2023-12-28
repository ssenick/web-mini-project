import { Currency } from 'entities/Currency';
import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var options = [
    { value: Currency.CAD, content: 'Canada CAD' },
    { value: Currency.EUR, content: 'Euro EUR' },
    { value: Currency.USD, content: 'Dollars USA' },
    { value: Currency.UAH, content: 'Ukraine UAH' }
];
var meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        items: options,
        defaultValue: 'Валюта'
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    args: {
        items: options,
        defaultValue: 'Валюта'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Funny = {
    args: {
        items: options,
        defaultValue: 'Валюта'
    }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var LightWithSelectValue = {
    args: {
        items: options,
        value: Currency.USD
    }
};
LightWithSelectValue.decorators = [ThemeDecorator(Theme.LIGHT)];
export var LightWithContentTitle = {
    args: {
        items: options,
        value: Currency.USD,
        contentTitle: true
    }
};
LightWithContentTitle.decorators = [ThemeDecorator(Theme.LIGHT)];
