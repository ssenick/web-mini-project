import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from 'app/povaiders/ThemeProvaider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Dropdown } from './Dropdown';
var dropDownItems = [
    {
        content: 'Gjpasda',
        disabled: false
    },
    {
        content: 'Link',
        disabled: true
    },
    {
        content: 'asdasdsadsa',
        disabled: false
    }
];
var meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        items: dropDownItems,
        trigger: _jsx("button", { children: "1111" })
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator];
export var Dark = {
    args: {
        items: dropDownItems,
        trigger: 'CLICK'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator];
export var Funny = {
    args: {
        items: dropDownItems,
        trigger: 'CLICK'
    }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator];
