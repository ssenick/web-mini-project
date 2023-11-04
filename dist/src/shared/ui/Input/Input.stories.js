import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { Input, InputVariant } from './Input';
var meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Clean = {
    args: {
        value: 'Input'
    }
};
Clean.decorators = [ThemeDecorator(Theme.LIGHT)];
export var CleanDark = {
    args: {
        value: 'Input'
    }
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK)];
export var InverseBackground = {
    args: {
        value: 'Input',
        variant: InputVariant.INVERSE_BG
    }
};
InverseBackground.decorators = [ThemeDecorator(Theme.LIGHT)];
export var InverseBackgroundDark = {
    args: {
        value: 'Input',
        variant: InputVariant.INVERSE_BG
    }
};
InverseBackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];
export var WithLabel = {
    args: {
        value: 'Input',
        variant: InputVariant.INVERSE_BG,
        label: 'label'
    }
};
WithLabel.decorators = [ThemeDecorator(Theme.LIGHT)];
