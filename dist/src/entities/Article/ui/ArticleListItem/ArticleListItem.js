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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import IconEye from 'shared/assets/icons/view.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import { ArticleBlockType, ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
export var ArticleListItem = memo(function (props) {
    var className = props.className, article = props.article, view = props.view;
    var types_component = _jsx(Text, { className: cls.types, text: article.type.join(', '), size: TextFontSize.SXS });
    var title_component = _jsx(Text, { className: cls.title, title: article.title });
    var createdAt_component = _jsx(Text, { className: cls.createAtt, text: article.createdAt, size: TextFontSize.XS });
    var imageBlock_component = (_jsx("div", __assign({ className: cls.imageBlock }, { children: _jsx("img", { className: cls.image, src: article.img, alt: "article image" }) })));
    if (view === ArticleView.BIG) {
        var firstTextBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsxs("article", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsxs("div", __assign({ className: cls.about }, { children: [_jsxs("div", __assign({ className: cls.user }, { children: [_jsx(Avatar, { src: article.user.avatar, size: 33, alt: 'User avatar' }), _jsx(Text, { text: article.user.username })] })), title_component, types_component] })), createdAt_component] })), imageBlock_component, _jsx("div", __assign({ className: cls.content }, { children: firstTextBlock && _jsx(Text, { text: firstTextBlock }) })), _jsx(Text, { title: article.title, className: cls.title })] })));
    }
    return (_jsxs("article", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: [_jsxs("div", __assign({ className: cls.imageBlock }, { children: [_jsx("img", { className: cls.image, src: article.img, alt: "article image" }), _jsx(Text, { className: cls.createAtt, text: article.createdAt, size: TextFontSize.XS })] })), _jsxs("div", __assign({ className: cls.info }, { children: [_jsx(Text, { className: cls.types, text: article.type.join(', '), size: TextFontSize.SXS }), _jsxs("div", __assign({ className: cls.viewWrapper }, { children: [_jsx(Text, { className: cls.view, text: String(article.views), size: TextFontSize.SXS }), _jsx(Icon, { className: cls.icon, Svg: IconEye })] }))] })), _jsx(Text, { title: article.title, className: cls.title })] })));
});
