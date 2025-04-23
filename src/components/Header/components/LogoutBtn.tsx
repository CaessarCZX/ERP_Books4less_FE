import { useLogout } from '../../../hooks/useLogout';
import { Button } from '../../UI/Button';
import { useTranslation } from 'react-i18next';

const LogoutBtn = () => {
  const logout = useLogout();
  const { t } = useTranslation();
  return (
    <Button onClick={logout} variant="outlineColor">
      {t('header.logOut')}
    </Button>
  );
};
export default LogoutBtn;
