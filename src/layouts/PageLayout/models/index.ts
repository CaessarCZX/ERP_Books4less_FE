import { getPrivateRoute } from '../../../utils/Routes/getPrivateRoute';
import { getPublicRoute } from '../../../utils/Routes/getPublicRoute';

function GetTitleRoutes() {
  const Login = getPublicRoute('LOGIN');
  const Register = getPrivateRoute('REGISTER');
  const SuccessRegister = getPrivateRoute('NEW_USER');
  const GeneratePO = getPrivateRoute('GENERATE_PO');
  const FilesHistory = getPrivateRoute('FILES_HISTORY');
  const UpdateReference = getPrivateRoute('UPDATE_BOOKS');

  const routes: Record<string, string> = {
    '/': 'Home',
    [Login]: 'Login',
    [Register]: 'Register',
    [SuccessRegister]: 'Successful Register',
    [GeneratePO]: 'Purchase Order Generator',
    [FilesHistory]: 'Files History',
    [UpdateReference]: 'Update ISBN',
  };
  return routes;
}

export default GetTitleRoutes;
