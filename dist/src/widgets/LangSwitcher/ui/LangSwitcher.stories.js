import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        children: 'EN'
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    args: {
        children: 'RU'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
