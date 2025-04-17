import { useLogout } from '../../../hooks/useLogout';
import { Button } from '../../UI/Button';

const LogoutBtn = () => {
  const logout = useLogout();
  return (
    <Button onClick={logout} variant="outlineColor">
      Log out
    </Button>
  );
};
export default LogoutBtn;
