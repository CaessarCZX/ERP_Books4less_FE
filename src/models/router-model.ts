export const PublicRoutes = {
  DEFAULTHOME: '',
  INDEX: '/',
  LOGIN: 'login',
  REGISTER: 'register',
  NOTFOUND: '*',
  NEW_USER: '/successNewUser',
};

export const PrivateRoutes = {
  SYSTEM: 'system',
  GENERATE_PO: 'GeneratePO',
  FILES_HISTORY: 'FilesHistory',
  UPDATE_BOOKS: 'UpdateBooks',
};

export type PrivateRoutesType = typeof PrivateRoutes;
export type PublicRoutesType = typeof PublicRoutes;
