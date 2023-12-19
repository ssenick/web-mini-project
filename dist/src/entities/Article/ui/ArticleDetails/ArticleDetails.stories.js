var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ArticleBlockType, ArticleType } from '../../model/types/article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AvatarImage from 'shared/assets/test/image.jpg';
import { ArticleDetails } from './ArticleDetails';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
var data = {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    img: AvatarImage,
    views: 101,
    createdAt: '26.02.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
                "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
                "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted in the form of separate files with the .js extension, which connect to web pages, but program code can also be included directly in the page code. This is all done using the. When the browser encounters such code, it executes it. For more information about the script tag, see w3school.com. In particular , let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create it in some text editor (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:"
            ]
        }
    ],
    user: {
        avatar: AvatarImage,
        username: 'Ssencik'
    }
};
export var Light = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        articleDetails: {
            data: data
        }
    }), RouterDecorator];
export var Dark = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        articleDetails: {
            data: data
        }
    }), RouterDecorator];
export var Funny = {
    args: {}
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
        articleDetails: {
            data: data
        }
    }), RouterDecorator];
export var IsLoading = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(ArticleDetails, { id: '1' }) }))); }
};
IsLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        articleDetails: {
            isLoading: true
        }
    }), RouterDecorator];
export var Error = {
    args: {}
};
Error.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        articleDetails: {
            error: 'error'
        }
    }), RouterDecorator];
