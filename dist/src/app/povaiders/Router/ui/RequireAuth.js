import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutPath } from 'shared/config/routeConfig';
export var RequireAuth = function (_a) {
    var children = _a.children;
    var auth = useSelector(getUserAuthData);
    var location = useLocation();
    if (!auth) {
        return _jsx(Navigate, { to: RoutPath.main, state: { from: location }, replace: true });
    }
    return _jsx(_Fragment, { children: children });
};
