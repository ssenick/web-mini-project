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
import { getAddNewCommentFormError, getAddNewCommentFormText } from 'features/AddNewCommentForm/model/selectors/addNewCommentFormSelectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addNewCommentFormActions, addNewCommentFormReducer } from '../../model/slice/addNewCommentFormSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddNewCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
var reducers = {
    addCommentForm: addNewCommentFormReducer
};
var AddNewCommentForm = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var text = useSelector(getAddNewCommentFormText);
    var error = useSelector(getAddNewCommentFormError);
    var dispatch = useAppDispatch();
    var onChange = useCallback(function (value) {
        dispatch(addNewCommentFormActions.setText(value));
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsx("div", __assign({ className: classNames(cls.AddNewCommentForm, {}, [className]) }, { children: _jsx(Input, { className: cls.input, onChange: onChange, value: text, placeholder: t('Напишите отзыв') }) })) })));
});
export default AddNewCommentForm;
