import { action } from '@storybook/addon-actions';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { ArticleType } from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Tabs } from './Tabs';
var typeTabs = [
    { value: ArticleType.ALL, content: 'Все' },
    { value: ArticleType.IT, content: 'Айти' },
    { value: ArticleType.SCIENCE, content: 'Наука' },
    { value: ArticleType.ECONOMICS, content: 'Экономика' }
];
var meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        tabs: typeTabs,
        value: ArticleType.ALL,
        onTabClick: action('clickTabHandler')
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    args: {
        tabs: typeTabs,
        value: ArticleType.ALL,
        onTabClick: action('clickTabHandler')
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Funny = {
    args: {
        tabs: typeTabs,
        value: ArticleType.ALL,
        onTabClick: action('clickTabHandler')
    }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
