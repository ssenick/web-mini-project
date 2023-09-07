import {useState} from "react";
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import AppLink from "shared/ui/AppLink/AppLink";
import {RoutPath} from "shared/config/routeConfig";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <aside className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
            <div onClick={toggleCollapse}  className={cls.burgerBtn}>
                <span className={cls.itemBtn}></span>
                <span className={cls.itemBtn}></span>
                <span className={cls.itemBtn}></span>
            </div>
            <ul className={cls.list}>
                <li><AppLink to={RoutPath.main}>Home</AppLink></li>
                <li><AppLink to={RoutPath.about}>About</AppLink></li>
            </ul>


        </aside>
    );
};
