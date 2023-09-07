import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss'
import {LoaderPoints} from "shared/ui/LoaderPoints/LoaderPoints";

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <LoaderPoints/>
        </div>
    );
};
