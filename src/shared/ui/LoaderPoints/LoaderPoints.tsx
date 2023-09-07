
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoaderPoints.module.scss'

interface LoaderPointsProps {
    className?: string
}

export const LoaderPoints = ({className}: LoaderPointsProps) => {
    return (
        <div className={classNames(cls.LoaderPoints,{},[className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};
