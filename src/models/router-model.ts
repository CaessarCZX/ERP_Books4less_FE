export const PublicRoutes = {
  DEFAULTHOME: '',
  INDEX: '/',
  LOGIN: 'login',
  NOTFOUND: '*',
};

export const PrivateRoutes = {
  SYSTEM: 'system',
  REGISTER: 'register',
  NEW_USER: '/successNewUser',
  GENERATE_PO: 'GeneratePO',
  FILES_HISTORY: 'FilesHistory',
  UPDATE_BOOKS: 'UpdateBooks',
};

export type PrivateRoutesType = typeof PrivateRoutes;
export type PublicRoutesType = typeof PublicRoutes;
