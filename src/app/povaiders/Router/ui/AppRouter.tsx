import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";


interface AppRouterProps {
    className?: string
}

export const AppRouter = ({className}:AppRouterProps) => {
    return (
        <div className={classNames('',{},[className])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(el =>
                        <Route key={el.path} path={el.path} element={el.element}/>
                    )}
                </Routes>
            </Suspense>
        </div>
    );
};
