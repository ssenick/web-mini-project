import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Normal = {
    args: {
        width: 300,
        height: 100
    }
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Circle = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};
Circle.decorators = [ThemeDecorator(Theme.LIGHT)];
export var NormalFunny = {
    args: {
        width: 300,
        height: 100
    }
};
NormalFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var CircleFunny = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};
CircleFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var NormalDark = {
    args: {
        width: 300,
        height: 100
    }
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
export var CircleDark = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
