import React, {Suspense} from 'react'
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/povaiders/ThemeProvaider";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (

        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>

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