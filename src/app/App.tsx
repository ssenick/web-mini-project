import React, {Suspense} from 'react'
import './styles/index.scss'
import { Route, Routes} from "react-router-dom";
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/povaiders/ThemeProvaider";
import {Header} from "widgets/Header";


const App = () => {
    const {theme} = useTheme()
    return (

        <div className={classNames('app',{},[theme])}>
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;