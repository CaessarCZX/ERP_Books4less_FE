import {
  IGetFilesResponse,
  IReceivedFiles,
  PaginationFilesResponse,
} from '../models/get-files-model';
import { UploadFile } from '../components/FilesTable/models/table-model';

interface AdaptedData {
  success: boolean;
  files: UploadFile[];
  pagination: PaginationFilesResponse;
}

class GetFilesAdapter {
  private filesResponse: IGetFilesResponse;

  constructor(response: IGetFilesResponse) {
    this.filesResponse = response;
  }

  parseFilesHistoryFromBE(): UploadFile[] {
    const files: IReceivedFiles[] = this.filesResponse.archivos;
    return files.map((file) => ({
      filename: file.nombre,
      type: file.tipo,
      actions: file.url,
      date: file.fecha_subida,
      size: file.tamano,
    }));
  }

  getData(): AdaptedData {
    const transforForTable = this.parseFilesHistoryFromBE();
    return {
      success: this.filesResponse.success,
      files: transforForTable,
      pagination: this.filesResponse.paginacion,
    };
  }
}

export default GetFilesAdapter;
