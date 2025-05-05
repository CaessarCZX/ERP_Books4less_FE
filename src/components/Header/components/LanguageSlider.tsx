import { useTranslation } from 'react-i18next';
import ToggleSlider from '../../UI/ToggleSlider';

const LanguageSlider = () => {
  const { i18n } = useTranslation();

  // Alterna entre inglés y español
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="mr-8 flex items-center gap-2">
      <p className="text-xs font-bold">ENG</p>
      <div className="flex place-items-center">
        <ToggleSlider
          initialChecked={i18n.language === 'es'}
          onChange={toggleLanguage}
        />
      </div>
      <p className="text-xs font-bold">ESP</p>
    </div>
  );
};

export default LanguageSlider;
