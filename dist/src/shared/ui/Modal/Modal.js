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
import { useState, useRef, useEffect, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';
export var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var timeRef = useRef();
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(function () {
                onClose();
                document.body.classList.remove('lock');
                setIsClosing(false);
            }, 1000);
        }
    }, [onClose]);
    var onContentClick = useCallback(function (e) {
        e.stopPropagation();
    }, []);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    useEffect(function () {
        if (isOpen) {
            document.body.classList.add('lock');
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    var mods = (_a = {},
        _a[cls.isOpen] = isOpen,
        _a[cls.isClose] = isClosing,
        _a);
    return (_jsx(Portal, { children: _jsx("div", __assign({ "data-testid": 'modal', className: classNames(cls.Modal, mods, [className]) }, { children: _jsx("div", __assign({ className: cls.overlay, onClick: closeHandler }, { children: _jsx("div", __assign({ className: cls.content, onClick: onContentClick }, { children: children })) })) })) }));
};
