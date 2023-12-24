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
import { CountrySelect } from 'entities/Country';
import { CurrencySelect } from 'entities/Currency';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input, InputVariant } from 'shared/ui/Input/Input';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextFontSize, TextVariant } from 'shared/ui/Text/Text';
import { ValidateProfileErrors } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
export var ProfileCard = memo(function (props) {
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error, readonly = props.readonly, onChangeFirstName = props.onChangeFirstName, onChangeLastName = props.onChangeLastName, onChangeUsername = props.onChangeUsername, onChangeAge = props.onChangeAge, onChangeAvatar = props.onChangeAvatar, onChangeCurrency = props.onChangeCurrency, onChangeCountry = props.onChangeCountry;
    var t = useTranslation().t;
    var _a = useState(''), errorFirstname = _a[0], setErrorFirstname = _a[1];
    var _b = useState(''), errorLastname = _b[0], setErrorLastname = _b[1];
    var _c = useState(''), errorUsername = _c[0], setErrorUsername = _c[1];
    var _d = useState(''), errorAge = _d[0], setErrorAge = _d[1];
    var _e = useState(''), errorServerError = _e[0], setErrorServerError = _e[1];
    var errorsValidateTranslates = useMemo(function () {
        var _a;
        return _a = {},
            _a[ValidateProfileErrors.INCORRECT_USER_FIRST_NAME] = t('Не указано имя'),
            _a[ValidateProfileErrors.INCORRECT_USER_LAST_NAME] = t('Не указана фамилия'),
            _a[ValidateProfileErrors.INCORRECT_USER_USER_NAME] = t('Не указана имя пользователя'),
            _a[ValidateProfileErrors.INCORRECT_AGE] = t('Не указан возраст'),
            _a[ValidateProfileErrors.INCORRECT_CITY] = t('Не указан город'),
            _a[ValidateProfileErrors.SERVER_ERROR] = t('что-то пошло не так'),
            _a;
    }, [t]);
    var setErrors = useCallback(function () {
        (error === null || error === void 0 ? void 0 : error.length) && error.forEach(function (err) {
            if (ValidateProfileErrors.INCORRECT_USER_FIRST_NAME === err)
                setErrorFirstname(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.INCORRECT_USER_LAST_NAME === err)
                setErrorLastname(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.INCORRECT_USER_USER_NAME === err)
                setErrorUsername(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.INCORRECT_AGE === err)
                setErrorAge(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.SERVER_ERROR === err)
                setErrorServerError(errorsValidateTranslates[err]);
        });
    }, [error, errorsValidateTranslates]);
    useEffect(function () {
        setErrors();
        return function () {
            setErrorFirstname('');
            setErrorLastname('');
            setErrorUsername('');
            setErrorAge('');
            setErrorServerError('');
        };
    }, [setErrors, errorFirstname, errorLastname, errorUsername, errorAge, errorServerError]);
    if (isLoading) {
        // return <LoaderPoints/>
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [_jsx("div", __assign({ className: cls.header }, { children: _jsx(Skeleton, { border: '50%', height: 100, width: 100 }) })), _jsxs("div", __assign({ className: cls.row }, { children: [_jsx(Skeleton, { border: '5px', height: 23, width: 140 }), _jsxs("div", __assign({ className: cls.column }, { children: [_jsx("div", __assign({ className: cls.inputWithError }, { children: _jsx(Skeleton, { border: '5px', height: 58, width: '100%' }) })), _jsx("div", __assign({ className: cls.inputWithError }, { children: _jsx(Skeleton, { border: '5px', height: 58, width: '100%' }) })), _jsx("div", __assign({ className: cls.inputWithError }, { children: _jsx(Skeleton, { border: '5px', height: 58, width: '100%' }) })), _jsx(Skeleton, { className: cls.currency, border: '5px', height: 58, width: '100%' })] }))] })), _jsxs("div", __assign({ className: cls.row }, { children: [_jsx(Skeleton, { border: '5px', height: 23, width: 140 }), _jsxs("div", __assign({ className: cls.column }, { children: [_jsx("div", __assign({ className: cls.inputWithError }, { children: _jsx(Skeleton, { border: '5px', height: 58, width: '100%' }) })), _jsx(Skeleton, { className: cls.avatar, border: '5px', height: 58, width: '100%' }), _jsx(Skeleton, { className: cls.currency, border: '5px', height: 58, width: '100%' })] }))] }))] })) })));
    }
    if (errorServerError) {
        return (_jsx(Text, { texAlign: TextAlign.CENTER, variant: TextVariant.ERROR, title: t('что-то пошло не так'), text: t('попробуйте обновить страницу') }));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [_jsx("div", __assign({ className: cls.header }, { children: (data === null || data === void 0 ? void 0 : data.avatar) && _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar }) })), _jsxs("div", __assign({ className: cls.row }, { children: [_jsx(Text, { title: t('Личные данные') }), _jsxs("div", __assign({ className: cls.column }, { children: [_jsxs("div", __assign({ className: cls.inputWithError }, { children: [_jsx(Input, { className: cls.input, label: t('Имя'), onChange: onChangeFirstName, readonly: readonly, variant: InputVariant.INVERSE_BG, value: data === null || data === void 0 ? void 0 : data.first }), errorFirstname && _jsx(Text, { className: cls.errorInput, variant: TextVariant.ERROR, size: TextFontSize.SXS, text: errorFirstname })] })), _jsxs("div", __assign({ className: cls.inputWithError }, { children: [_jsx(Input, { className: cls.input, label: t('Фамилия'), onChange: onChangeLastName, readonly: readonly, variant: InputVariant.INVERSE_BG, value: data === null || data === void 0 ? void 0 : data.lastname }), errorLastname && _jsx(Text, { className: cls.errorInput, variant: TextVariant.ERROR, size: TextFontSize.SXS, text: errorLastname })] })), _jsxs("div", __assign({ className: cls.inputWithError }, { children: [_jsx(Input, { className: cls.age, label: t('Возраст'), onChange: onChangeAge, readonly: readonly, variant: InputVariant.INVERSE_BG, value: data === null || data === void 0 ? void 0 : data.age }), errorAge && _jsx(Text, { className: cls.errorInput, variant: TextVariant.ERROR, size: TextFontSize.SXS, text: errorAge })] })), _jsx(CountrySelect, { onChange: onChangeCountry, className: cls.currency, value: data === null || data === void 0 ? void 0 : data.country, readonly: readonly })] }))] })), _jsxs("div", __assign({ className: cls.row }, { children: [_jsx(Text, { title: t('Настройки профиля') }), _jsxs("div", __assign({ className: cls.column }, { children: [_jsxs("div", __assign({ className: cls.inputWithError }, { children: [_jsx(Input, { className: cls.username, label: t('Имя пользователя'), onChange: onChangeUsername, readonly: readonly, variant: InputVariant.INVERSE_BG, value: data === null || data === void 0 ? void 0 : data.username }), errorUsername && _jsx(Text, { className: cls.errorInput, variant: TextVariant.ERROR, size: TextFontSize.SXS, text: errorUsername })] })), _jsx(Input, { className: cls.avatar, label: t('Ссылка на аватар'), onChange: onChangeAvatar, readonly: readonly, variant: InputVariant.INVERSE_BG, value: data === null || data === void 0 ? void 0 : data.avatar }), _jsx(CurrencySelect, { onChange: onChangeCurrency, className: cls.currency, value: data === null || data === void 0 ? void 0 : data.currency, readonly: readonly })] }))] }))] })) })));
});
