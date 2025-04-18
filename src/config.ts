const MB_SIZE = 1024 * 1024;

const AppConfig = {
  uploadFiles: {
    onGeneratorPOPage: {
      maxSizeOfFile: 10 * MB_SIZE,
      acceptedFiles: '.xlxs, .xlx',
      acceptMultipleFiles: true,
    },
    onUpdateBooksPage: {
      maxSizeOfFile: 30 * MB_SIZE,
      acceptedFiles: '.xlxs, .xlx',
      acceptMultipleFiles: false,
    },
  },
};

export default AppConfig;
