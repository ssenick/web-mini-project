import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { Text, TextAlign, TextFontSize, TextVariant } from './Text';
var meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Normal = {
    args: {
        title: 'Title',
        text: 'Text text text'
    }
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
export var NormalDark = {
    args: {
        title: 'Title',
        text: 'Text text text'
    }
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
export var NormalFunny = {
    args: {
        title: 'Title',
        text: 'Text text text'
    }
};
NormalFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var OnlyTitle = {
    args: {
        title: 'Title'
    }
};
OnlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)];
export var OnlyTitleDark = {
    args: {
        title: 'Title'
    }
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export var OnlyTitleFunny = {
    args: {
        title: 'Title'
    }
};
OnlyTitleFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var OnlyText = {
    args: {
        text: 'Text text text'
    }
};
OnlyText.decorators = [ThemeDecorator(Theme.LIGHT)];
export var OnlyTextDark = {
    args: {
        text: 'Text text text'
    }
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export var OnlyTextFunny = {
    args: {
        text: 'Text text text'
    }
};
OnlyTextFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var Error = {
    args: {
        title: 'Text text text',
        variant: TextVariant.ERROR
    }
};
Error.decorators = [ThemeDecorator(Theme.LIGHT)];
export var ErrorDark = {
    args: {
        title: 'Text text text',
        variant: TextVariant.ERROR
    }
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
export var ErrorFunny = {
    args: {
        title: 'Text text text',
        variant: TextVariant.ERROR
    }
};
ErrorFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var TextAlignLeft = {
    args: {
        title: 'Title',
        text: 'Text text text',
        texAlign: TextAlign.LEFT
    }
};
TextAlignLeft.decorators = [ThemeDecorator(Theme.LIGHT)];
export var TextAlignCenter = {
    args: {
        title: 'Title',
        text: 'Text text text',
        texAlign: TextAlign.CENTER
    }
};
TextAlignCenter.decorators = [ThemeDecorator(Theme.LIGHT)];
export var TextAlignRight = {
    args: {
        title: 'Title',
        text: 'Text text text',
        texAlign: TextAlign.RIGHT
    }
};
TextAlignRight.decorators = [ThemeDecorator(Theme.LIGHT)];
export var TextSizeSXS = {
    args: {
        title: 'Title',
        text: 'Text text text',
        size: TextFontSize.SXS
    }
};
TextSizeSXS.decorators = [ThemeDecorator(Theme.LIGHT)];
export var TextSizeXS = {
    args: {
        title: 'Title',
        text: 'Text text text',
        size: TextFontSize.XS
    }
};
TextSizeXS.decorators = [ThemeDecorator(Theme.LIGHT)];
export var TextSizeSM = {
    args: {
        title: 'Title',
        text: 'Text text text',
        size: TextFontSize.SM
    }
};
TextSizeSM.decorators = [ThemeDecorator(Theme.LIGHT)];
export var TextSizeM = {
    args: {
        title: 'Title',
        text: 'Text text text',
        size: TextFontSize.M
    }
};
TextSizeM.decorators = [ThemeDecorator(Theme.LIGHT)];
export var TextSizeL = {
    args: {
        title: 'Title',
        text: 'Text text text',
        size: TextFontSize.L
    }
};
TextSizeL.decorators = [ThemeDecorator(Theme.LIGHT)];
