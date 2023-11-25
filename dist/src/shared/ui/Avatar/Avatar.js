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
import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
var spareImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wpzdFY5YHIXeBfCiFyK5E7yFgWFl8gvZhhhimODJIrsbmB2GoVG2FyXX9Bs5avvwbow&usqp=CAU';
export var Avatar = memo(function (props) {
    var className = props.className, src = props.src, _a = props.alt, alt = _a === void 0 ? 'Avatar image' : _a, size = props.size;
    var styles = useMemo(function () { return ({
        width: size || 100,
        height: size || 100,
        flexBasis: size || 100
    }); }, [size]);
    return (_jsx("div", __assign({ "data-testid": 'avatar', style: styles, className: classNames(cls.Avatar, {}, [className]) }, { children: _jsx("img", { src: src || spareImage, alt: alt }) })));
});
