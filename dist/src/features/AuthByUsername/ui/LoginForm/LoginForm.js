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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getUserAuthData } from 'entities/User';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Input, InputVariant } from 'shared/ui/Input/Input';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectros/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectros/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginIsLoading } from '../../model/selectros/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectros/getLoginError/getLoginError';
import { Text, TextFontSize, TextVariant } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader';
var initialReducers = {
    loginForm: loginReducer
};
var LoginForm = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var username = useSelector(getLoginUsername);
    var password = useSelector(getLoginPassword);
    var isLoading = useSelector(getLoginIsLoading);
    var error = useSelector(getLoginError);
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var user = useSelector(getUserAuthData);
    var onChangeUsername = useCallback(function (value) {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    var onChangePassword = useCallback(function (value) {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    var onLoginClick = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(username && password)) return [3 /*break*/, 2];
                    return [4 /*yield*/, dispatch(loginByUsername({ username: username, password: password }))];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [dispatch, username, password]);
    var onKeyDown = useCallback(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(e.key === 'Enter' && username && password)) return [3 /*break*/, 2];
                    return [4 /*yield*/, onLoginClick()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [onLoginClick, username, password]);
    useEffect(function () {
        window.addEventListener('keydown', onKeyDown);
        return function () {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
    useEffect(function () {
        if (user) {
            navigate('/profile/' + user.id);
        }
    }, [navigate, user]);
    return (_jsx(DynamicModuleLoader, __assign({ removeAfterUnmount: true, reducers: initialReducers }, { children: _jsxs("div", __assign({ className: classNames(cls.LoginForm, {}, [className]) }, { children: [_jsx(Text, { className: cls.title, size: TextFontSize.M, title: t('Авторизация') }), error && _jsx(Text, { className: cls.error, variant: TextVariant.ERROR, size: TextFontSize.XS, text: t('Пользователь не найдет или данные не верны') }), _jsxs("div", __assign({ className: cls.wrapper }, { children: [_jsx(Input, { placeholder: t('User name'), variant: InputVariant.INVERSE_BG, onChange: onChangeUsername, value: username, autofocus: true }), _jsx(Input, { type: 'password', placeholder: t('Password'), variant: InputVariant.INVERSE_BG, onChange: onChangePassword, value: password }), _jsx("div", __assign({ className: cls.loginBottom }, { children: _jsx(Button, __assign({ size: ButtonSize.M, variant: ButtonVariant.BORDER, onClick: onLoginClick, disabled: isLoading }, { children: t('Вход') })) }))] }))] })) })));
});
export default LoginForm;
