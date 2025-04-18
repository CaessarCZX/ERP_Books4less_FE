const MB_SIZE = 1024 * 1024;

const AppConfig = {
  uploadFiles: {
    onGeneratorPOPage: {
      maxSizeOfFile: 10 * MB_SIZE,
      acceptedFiles: '.xlsx, .xls',
      acceptMultipleFiles: true,
    },
    onUpdateBooksPage: {
      maxSizeOfFile: 30 * MB_SIZE,
      acceptedFiles: '.xlsx, .xls',
      acceptMultipleFiles: false,
    },
  },
};

export default AppConfig;
