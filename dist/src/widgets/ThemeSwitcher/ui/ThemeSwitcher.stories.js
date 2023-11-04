import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import SunIcon from 'shared/assets/icons/sun.svg';
var meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
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
    args: {
        childrenStorybook: _jsx(SunIcon, {})
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
