import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { Select, SelectVariant } from 'shared/ui/Select/Select';
var meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Normal = {
    args: {
        variant: SelectVariant.NORMAL,
        value: 'Canada',
        options: [
            { value: 'Canada', content: 'Canada' },
            { value: 'Slovakia', content: 'Slovakia' }
        ]
    }
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
export var NormalDark = {
    args: {
        variant: SelectVariant.NORMAL,
        value: 'Canada',
        options: [
            { value: 'Canada', content: 'Canada' },
            { value: 'Slovakia', content: 'Slovakia' }
        ]
    }
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
export var NormalFunny = {
    args: {
        variant: SelectVariant.NORMAL,
        value: 'Canada',
        options: [
            { value: 'Canada', content: 'Canada' },
            { value: 'Slovakia', content: 'Slovakia' }
        ]
    }
};
NormalFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var Bg = {
    args: {
        variant: SelectVariant.INVERSE_BG,
        options: [
            { value: 'Canada', content: 'Canada' },
            { value: 'Slovakia', content: 'Slovakia' }
        ]
    }
};
Bg.decorators = [ThemeDecorator(Theme.LIGHT)];
export var BgDark = {
    args: {
        variant: SelectVariant.INVERSE_BG,
        options: [
            { value: 'Canada', content: 'Canada' },
            { value: 'Slovakia', content: 'Slovakia' }
        ]
    }
};
BgDark.decorators = [ThemeDecorator(Theme.DARK)];
export var BgFunny = {
    args: {
        variant: SelectVariant.INVERSE_BG,
        options: [
            { value: 'Canada', content: 'Canada' },
            { value: 'Slovakia', content: 'Slovakia' }
        ]
    }
};
BgFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
