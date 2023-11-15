import { jsx as _jsx } from "react/jsx-runtime";
import { CommentCart } from './CommentCart';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import Icon from 'shared/assets/test/image.jpg';
var meta = {
    title: 'entities/CommentCart',
    component: CommentCart,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
var comment = {
    id: '1',
    user: {
        id: '1',
        username: 'Admin',
        avatar: Icon
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
    createdComment: '20.20.2020'
};
export var Light = {
    args: {
        comment: {
            id: '1',
            user: {
                id: '1',
                username: 'Admin',
                avatar: Icon
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
            createdComment: '20.20.2020'
        }
    },
    render: function (args) { return (_jsx("div", { className: "app__content" })); }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
