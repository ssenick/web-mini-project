import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
export var Skeleton = memo(function (props) {
    var className = props.className, width = props.width, height = props.height, border = props.border;
    var styles = {
        width: width,
        height: height,
        borderRadius: border
    };
    return (_jsx("div", { className: classNames(cls.Skeleton, {}, [className]), style: styles }));
});
