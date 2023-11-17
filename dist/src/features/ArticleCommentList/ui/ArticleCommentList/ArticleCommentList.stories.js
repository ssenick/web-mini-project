import { Theme } from 'app/povaiders/ThemeProvaider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticleCommentList } from './ArticleCommentList';
var meta = {
    title: 'features/ArticleCommentList',
    component: ArticleCommentList,
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
