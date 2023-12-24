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
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import { getAddNewCommentFormError, getAddNewCommentFormIsLoading, getAddNewCommentFormText } from '../../model/selectors/addNewCommentFormSelectors';
import { addNewCommentFormActions, addNewCommentFormReducer } from '../../model/slice/addNewCommentFormSlice';
import cls from './AddNewCommentForm.module.scss';
var reducers = {
    addCommentForm: addNewCommentFormReducer
};
var AddNewCommentForm = memo(function (_a) {
    var _b, _c;
    var className = _a.className, onSendComment = _a.onSendComment;
    var t = useTranslation().t;
    var text = useSelector(getAddNewCommentFormText);
    var error = useSelector(getAddNewCommentFormError);
    var isLoading = useSelector(getAddNewCommentFormIsLoading);
    var dispatch = useAppDispatch();
    var onChangeCommentArea = useCallback(function (value) {
        dispatch(addNewCommentFormActions.setText(value));
    }, [dispatch]);
    var onSendHandler = useCallback(function () {
        if (text) {
            onSendComment(text || '');
            onChangeCommentArea('');
        }
    }, [onSendComment, onChangeCommentArea, text]);
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.AddNewCommentForm, (_b = {}, _b[cls.isLoading] = isLoading, _b), [className]) }, { children: t('что-то пошло не так') })));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs("div", __assign({ className: classNames(cls.AddNewCommentForm, (_c = {}, _c[cls.isLoading] = isLoading, _c), [className]) }, { children: [_jsx(Text, { className: cls.title, size: TextFontSize.L, title: "".concat(t('Комментарии'), ":") }), _jsxs("div", __assign({ className: cls.wrapper }, { children: [_jsx(TextArea, { className: cls.textarea, onChange: onChangeCommentArea, value: text, placeholder: t('Напишите комментарий') }), isLoading && _jsx(LoaderPoints, { className: cls.loader })] })), _jsx("div", __assign({ className: cls.bottom }, { children: _jsx(Button, __assign({ onClick: onSendHandler, className: cls.button, variant: ButtonVariant.BACKGROUND }, { children: t('Отправить комментарий') })) }))] })) })));
});
export default AddNewCommentForm;
