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
import { getScrollSaveByPath, scrollActions } from 'features/ScrollSave';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import cls from './Page.module.scss';
export var Page = function (props) {
    var className = props.className, children = props.children, onScrollEnd = props.onScrollEnd, _a = props.scrollTrigger, scrollTrigger = _a === void 0 ? false : _a;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    var scrollPosition = useSelector(function (state) { return getScrollSaveByPath(state, pathname); });
    // const onScroll = (): void => {
    //   if (scrollTrigger) {
    //     dispatch(scrollActions.setScrollPosition({
    //       position: wrapperRef.current.scrollTop,
    //       path: pathname
    //     }))
    //   }
    // }
    var onScroll = useDebounce(function () {
        if (scrollTrigger) {
            dispatch(scrollActions.setScrollPosition({
                position: wrapperRef.current.scrollTop,
                path: pathname
            }));
        }
    }, 400);
    useInfinityScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd
    });
    // прокрутка к позиции
    useInitialEffect(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    return (_jsxs("section", __assign({ ref: wrapperRef, onScroll: onScroll, className: classNames(cls.Page, {}, [className]) }, { children: [children, _jsx("div", { className: cls.trigger, ref: triggerRef })] })));
};
