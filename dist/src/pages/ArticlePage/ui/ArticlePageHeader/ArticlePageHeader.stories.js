import { ArticleView } from 'entities/Article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticlePageHeader } from './ArticlePageHeader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'pages/Article/ArticlePageHeader',
    component: ArticlePageHeader,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var LightSmall = {
    args: {}
};
LightSmall.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        articlePage: {
            view: ArticleView.SMALL
        }
    }), RouterDecorator];
export var DarkSmall = {
    args: {}
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        articlePage: {
            view: ArticleView.SMALL
        }
    }), RouterDecorator];
export var FunnySmall = {
    args: {}
};
FunnySmall.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
        articlePage: {
            view: ArticleView.SMALL
        }
    }), RouterDecorator];
export var LightBig = {
    args: {}
};
LightBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        articlePage: {
            view: ArticleView.BIG
        }
    }), RouterDecorator];
export var DarkBig = {
    args: {}
};
DarkBig.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        articlePage: {
            view: ArticleView.BIG
        }
    }), RouterDecorator];
export var FunnyBig = {
    args: {}
};
FunnyBig.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
        articlePage: {
            view: ArticleView.BIG
        }
    }), RouterDecorator];
