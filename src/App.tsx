import React, {Suspense} from 'react'
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {HomePageAsync} from "./pages/HomePage/HomePageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {useTheme} from "./theme/useTheme";
import {ClassNames} from "./halpers/ClassNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (

        <div className={ClassNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;