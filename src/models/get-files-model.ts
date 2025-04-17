export interface IReceivedFiles {
  nombre: string;
  tipo: string;
  fecha_subida: string;
  tamano: string;
  url: string;
}

export type FileType = 'csv' | 'pdf' | 'xlsx' | 'all';

export interface IGetFiles {
  fileName?: string;
  typeFile?: FileType;
  userId: string;
  page: number;
  limit?: number;
}

export interface PaginationFilesResponse {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface IGetFilesResponse {
  success: boolean;
  archivos: IReceivedFiles[];
  paginacion: PaginationFilesResponse;
}
