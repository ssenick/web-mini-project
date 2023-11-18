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
import { AppRouter } from 'app/povaiders/Router';
import { getUserInited, userActions } from 'entities/User';
import { Suspense, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
var App = function () {
    var dispatch = useDispatch();
    var inited = useSelector(getUserInited);
    /// === ////////
    var isPcScreen = useMediaQuery({ minWidth: 1200 });
    var isTabletScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 });
    var isMobilScreen = useMediaQuery({ maxWidth: 768, minWidth: 450 });
    var isXSMobilScreen = useMediaQuery({ maxWidth: 450 });
    /// === ////////
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    /// === ////////
    var mods = useMemo(function () { return ({
        isPcScreen: isPcScreen,
        isTabletScreen: isTabletScreen,
        isMobilScreen: isMobilScreen,
        isXSMobilScreen: isXSMobilScreen
    }); }, [isPcScreen, isTabletScreen, isMobilScreen, isXSMobilScreen]);
    /// === ////////
    return (_jsx("div", __assign({ className: classNames('app', mods, []) }, { children: _jsxs(Suspense, __assign({ fallback: '' }, { children: [_jsx(Header, { className: 'app__header' }), _jsx(Sidebar, { className: 'app__sidebar' }), inited && _jsx(AppRouter, { className: 'app__content' })] })) })));
};
export default App;
