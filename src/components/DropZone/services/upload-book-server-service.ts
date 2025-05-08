import { UpdateBooksAdapter } from '../../../pages/UpdateISBN/adapters/update-reference-adapter';
import projectApi from '../../../services/api/service.config';
import {
  IUploadFiles,
  IUploadFilesResponse,
} from '../models/upload-files-model';

class UploadBooksToServerService {
  private inputData: IUploadFiles;
  private adapter: UpdateBooksAdapter;

  constructor(inputData: IUploadFiles) {
    this.inputData = inputData;
    this.adapter = new UpdateBooksAdapter();
  }

  static async postUploadBooks(
    formData: FormData
  ): Promise<IUploadFilesResponse> {
    const { data } = await projectApi.post('/api/upload-excel', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }

  private normalizeData() {
    const { userId, files } = this.inputData;
    return this.adapter.mapToUpdateBooks(userId, files);
  }

  generateFormData() {
    const data = this.normalizeData();
    return this.adapter.formDataGenerator(data);
  }
}

export default UploadBooksToServerService;
