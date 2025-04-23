import { useTranslation } from 'react-i18next';

const BtnPrueba = () => {
  const { i18n } = useTranslation();

  // Alterna entre inglés y español
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'English' : 'Español'}
    </button>
  );
};

export default BtnPrueba;
