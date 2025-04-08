import { useContext } from 'react';
import { FilesContextType } from '../models/FilesContextType';
import { FilesContext } from '../context/FilesContext';

export const useFiles = (): FilesContextType => {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error('useFiles debe usarse dentro de un FilesProvider');
  }
  return context;
};
