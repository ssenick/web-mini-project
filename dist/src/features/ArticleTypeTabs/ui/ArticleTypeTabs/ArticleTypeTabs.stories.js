import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        value: ArticleType.ALL
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    args: {
        value: ArticleType.ALL
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Funny = {
    args: {
        value: ArticleType.ALL
    }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
