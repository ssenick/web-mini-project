import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <div>
            {t('Заголовок страницы')}
        </div>
    );
};

export default AboutPage;