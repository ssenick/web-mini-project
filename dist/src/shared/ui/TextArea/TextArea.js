import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TextArea.module.scss';
export var TextArea = memo(function (props) {
    var className = props.className, value = props.value, onChange = props.onChange, readonly = props.readonly, label = props.label;
    var _a = useState(false), isFocus = _a[0], setIsFocus = _a[1];
    var onChangeHandler = useCallback(function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    }, [onChange]);
    var onFocus = useCallback(function () {
        if (!readonly)
            setIsFocus(true);
    }, [readonly]);
    var onBlur = useCallback(function () {
        setIsFocus(false);
    }, []);
    var mods = useMemo(function () {
        var _a;
        return (_a = {},
            _a[cls.isFocus] = isFocus,
            _a[cls.readonly] = readonly,
            _a);
    }, [isFocus, readonly]);
    return (_jsx("div", { className: classNames(cls.TextArea, {}, [className]) }));
});
