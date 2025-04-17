export const PublicRoutes = {
  INDEX: '/',
  LOGIN: 'login',
  REGISTER: 'register',
  NOTFOUND: '*',
};

export const PrivateRoutes = {
  SYSTEM: 'system',
  GENERATE_PO: 'GeneratePO',
  FILES_HISTORY: 'FilesHistory',
  UPDATE_BOOKS: 'UpdateBooks',
};

export type PrivateRoutesType = typeof PrivateRoutes;
export type PublicRoutesType = typeof PublicRoutes;
