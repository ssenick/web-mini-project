import { Currency } from 'entities/Currency';
import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var options = [
    { value: Currency.CAD, content: Currency.CAD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.UAH, content: Currency.UAH }
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
LightWithSelectValue.decorators = [ThemeDecorator(Theme.LIGHT)];
