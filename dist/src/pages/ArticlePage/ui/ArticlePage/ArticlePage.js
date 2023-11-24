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
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { memo } from 'react';
// import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
var data = {
    id: '1',
    title: 'Javascript news ',
    subtitle: "What's new in JS for 2023?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 101,
    createdAt: '26.02.2023',
    user: {
        id: '2',
        username: 'Ssenick',
        avatar: 'https://thumbs.dreamstime.com/b/cartoon-avatar-designer-ai-generated-programmer-avatar-designer-ai-generated-programmer-cartoon-character-programming-286004113.jpg'
    },
    type: [ArticleType.IT, ArticleType.SCIENCE],
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
    ]
};
var data2 = {
    id: '2',
    title: 'Javascript news news Javascript',
    subtitle: "What's new in JS for 2023?",
    img: 'https://thumbs.dreamstime.com/b/cartoon-avatar-designer-ai-generated-programmer-avatar-designer-ai-generated-programmer-cartoon-character-programming-286004113.jpg',
    views: 101,
    createdAt: '26.02.2023',
    user: {
        id: '1',
        username: 'Ulbi tV',
        avatar: ''
    },
    type: [ArticleType.IT, ArticleType.SCIENCE],
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
    ]
};
var ArticlePage = function (_a) {
    // const { t } = useTranslation()
    var className = _a.className;
    return (
    // eslint-disable-next-line
    // @ts-ignore
    _jsx("div", __assign({ className: classNames(cls.ArticlePage, {}, [className]) }, { children: _jsx(ArticleList, { articles: [data, data2, data, data2, data, data2, data, data2] }) })));
};
export default memo(ArticlePage);
