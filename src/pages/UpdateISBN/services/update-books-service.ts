import projectApi from '../../../services/api/service.config';
import Notification from '../../../utils/Notification';
import { UpdateBooksAdapter } from '../adapters/update-reference-adapter';
import {
  IUpdateReference,
  IUpdateReferenceResponse,
} from '../models/update-books-model';

class UpdateBooksService {
  private inputData: IUpdateReference;
  private adapter: UpdateBooksAdapter;

  constructor(inputData: IUpdateReference) {
    this.inputData = inputData;
    this.adapter = new UpdateBooksAdapter();
  }

  static async postUpdateBooks(
    formData: FormData
  ): Promise<IUpdateReferenceResponse> {
    const { data } = await projectApi.post('/api/upload-reference', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }

  renderFoundErrors(errors: string[]) {
    errors.forEach((error) =>
      Notification.alert(error, { position: 'bottom-right', delay: 500 })
    );
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

export default UpdateBooksService;
