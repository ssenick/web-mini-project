import React from 'react'
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/povaiders/ThemeProvaider";
import {Header} from "widgets/Header";
import {AppRouter} from "app/povaiders/Router";
import {Sidebar} from "widgets/Sidebar";


const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app',{},[theme])}>
            <Header className='app__header'/>
            <Sidebar className='app__sidebar'/>
            <AppRouter className='app__content'/>
        </div>
    );
};

export default App;