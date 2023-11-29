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
import { ArticleView } from 'entities/Article';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import TiledIcon from 'shared/assets/icons/fe_tiled.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ViewSelector.module.scss';
var viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
];
export var ViewSelector = memo(function (props) {
    var className = props.className, view = props.view, onViewClick = props.onViewClick;
    var onClick = function (newView) { return function () {
        onViewClick === null || onViewClick === void 0 ? void 0 : onViewClick(newView);
    }; };
    return (_jsx("div", __assign({ className: classNames(cls.ArticleViewSelector, {}, [className]) }, { children: viewTypes.map(function (viewType) {
            var _a;
            return _jsx(Button, __assign({ onClick: onClick(viewType.view), square: true, size: ButtonSize.SM, className: classNames(cls.button, (_a = {}, _a[cls.selected] = viewType.view === view, _a), []) }, { children: _jsx(Icon, { Svg: viewType.icon }) }), viewType.view);
        }) })));
});
