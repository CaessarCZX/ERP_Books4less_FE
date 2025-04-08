import { PropsWithChildren, useState } from 'react';
import { FilesContextType } from '../models/FilesContextType';
import { FilesContext } from '../context/FilesContext';

const FilesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [files, setFiles] = useState<File[]>([]);

  const addFiles = (newFiles: File[]) => {
    setFiles((prevFiles) => {
      const uniqueFiles = [
        ...new Map(
          [...prevFiles, ...newFiles].map((file) => [file.name, file])
        ).values(),
      ];
      return uniqueFiles;
    });
  };

  const removeFile = (index: number): void => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const clearFiles = () => setFiles([]);

  const value: FilesContextType = {
    files,
    addFiles,
    removeFile,
    clearFiles,
  };

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
};

export default FilesProvider;
