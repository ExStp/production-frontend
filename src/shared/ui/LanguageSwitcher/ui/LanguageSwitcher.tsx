import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ThemeButton.CLEAR} onClick={switchLanguage}>
            {t('Сменить язык')}
        </Button>
    );
};
