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
import { fetchProfileData, getProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditIcon from 'shared/assets/icons/edit.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileForm.module.scss';
var reducers = {
    profile: profileReducer
};
export var ProfileForm = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var authData = useSelector(getUserAuthData);
    var profileData = useSelector(getProfileData);
    var canEdit = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var formData = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    var dispatch = useAppDispatch();
    var readonly = useSelector(getProfileReadonly);
    var id = useParams().id;
    useInitialEffect(function () {
        if (id)
            void dispatch(fetchProfileData(id));
    });
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.canselEdit());
    }, [dispatch]);
    var onSaveEdit = useCallback(function () {
        void dispatch(updateProfileData());
    }, [dispatch]);
    var onChangeFirstName = useCallback(function (value) {
        var newValue = value === null || value === void 0 ? void 0 : value.trim();
        dispatch(profileActions.updateFirst(newValue || ''));
    }, [dispatch]);
    var onChangeLastName = useCallback(function (value) {
        var newValue = value === null || value === void 0 ? void 0 : value.trim();
        dispatch(profileActions.updateLastname(newValue || ''));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        if (Number(value) < 120) {
            dispatch(profileActions.updateAge(Number(value) || ''));
        }
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateUsername(value || ''));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateAvatar(value || ''));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateCurrency(currency));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateCountry(country));
    }, [dispatch]);
    var mods = useMemo(function () {
        var _a;
        return (_a = {},
            _a[cls.error] = error === null || error === void 0 ? void 0 : error.length,
            _a[cls.isLoading] = isLoading,
            _a[cls.readonly] = readonly,
            _a);
    }, [error, isLoading, readonly]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(VStack, __assign({ gap: '20', className: classNames(cls.ProfileForm, mods, [className]) }, { children: [canEdit
                    ? _jsx(HStack, __assign({ gap: '10', wrap: true, justify: 'end', className: cls.header }, { children: !readonly
                            ? _jsx(Button, __assign({ onClick: onCancelEdit, withIcon: true, variant: ButtonVariant.BORDER_ERROR }, { children: t('Отменить') }))
                            : _jsxs(Button, __assign({ onClick: onEdit, withIcon: true, variant: ButtonVariant.BORDER }, { children: [t('Редактировать'), _jsx(EditIcon, {})] })) }))
                    : _jsx(HStack, { gap: '10', wrap: true, justify: 'end', className: cls.header }), _jsx("div", __assign({ className: cls.form }, { children: _jsx(ProfileCard, { className: cls.card, data: formData, readonly: readonly, error: error, isLoading: isLoading, onChangeFirstName: onChangeFirstName, onChangeLastName: onChangeLastName, onChangeAge: onChangeAge, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry }) })), _jsx(HStack, __assign({ gap: '10', wrap: true, justify: 'end', className: cls.bottom }, { children: canEdit &&
                        _jsx(Button, __assign({ onClick: onSaveEdit, className: cls.btnSave, variant: ButtonVariant.BACKGROUND }, { children: t('Сохранить') })) }))] })) })));
});
