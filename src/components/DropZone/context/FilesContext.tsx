import { createContext } from 'react';
import { FilesContextType } from '../models/FilesContextType';

export const FilesContext = createContext<FilesContextType | undefined>(
  undefined
);
