import {useTranslation} from "react-i18next";

const HomePage = () => {
    const {t} = useTranslation('home')
    return (
        <div>
            {t('Заголовок страницы')}
        </div>
    );
};

export default HomePage;