import { Theme } from 'app/povaiders/ThemeProvaider';
import Image from 'shared/assets/test/image.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';
var article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2023?",
    img: Image,
    views: 1022,
    createdAt: '26.02.2023',
    user: {
        id: '1',
        username: 'ssenick',
        avatar: Image
    },
    type: [
        'IT'
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
                "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
                "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted in the form of separate files with the .js extension, which connect to web pages, but program code can also be included directly in the page code. This is all done using the  tag. When the browser encounters such code, it executes it. For more information about the script tag, see w3school.com. In particular , let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create it in some text editor (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:"
            ]
        },
        {
            id: '4',
            type: 'CODE',
            code: 'sd'
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
                "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted in the form of separate files with the .js extension, which connect to web pages, but program code can also be included directly in the page code. This is all done using the  tag. When the browser encounters such code, it executes it. For more information about the script tag, see w3school.com. In particular , let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create it in some text editor (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:"
            ]
        },
        {
            id: '2',
            type: 'IMAGE',
            src: Image,
            title: 'Figure 1 - site screenshot'
        }
    ]
};
var meta = {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Big = {
    args: {
        article: article,
        view: ArticleView.BIG
    }
};
Big.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Small = {
    args: {
        article: article,
        view: ArticleView.BIG
    }
};
Small.decorators = [ThemeDecorator(Theme.LIGHT)];
