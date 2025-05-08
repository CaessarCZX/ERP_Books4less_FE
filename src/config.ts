import * as Yup from 'yup';

export interface EnvSchema {
  VITE_PUBLIC_API_BACKEND: string;
  VITE_REDUX_SECRET_KEY: string;
}

const envValidationSchema = Yup.object({
  VITE_PUBLIC_API_BACKEND: Yup.string().url().required(),
  VITE_REDUX_SECRET_KEY: Yup.string().required(),
}).required();

const parsed = envValidationSchema.validateSync(import.meta.env, {
  stripUnknown: true, // descarta variables no definidas en el esquema
});

const MB_SIZE = 1024 * 1024;

const AppConfig = {
  // Principal Back-end service
  apiUrl: parsed.VITE_PUBLIC_API_BACKEND,

  // Redux secret key for encriptation data
  reduxSecretKey: parsed.VITE_REDUX_SECRET_KEY,

  // Get development mode
  isDevelopmenMode: import.meta.env.DEV,

  // Upload files config
  uploadFiles: {
    onGeneratorPOPage: {
      maxSizeOfFile: 50 * MB_SIZE,
      acceptedFiles: '.xlsx, .xls',
      acceptMultipleFiles: true,
    },
    onUpdateBooksPage: {
      maxSizeOfFile: 50 * MB_SIZE,
      acceptedFiles: '.xlsx, .xls',
      acceptMultipleFiles: false,
    },
  },
};

export default AppConfig;
