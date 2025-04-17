import projectApi from './api/service.config';
import { IGetFiles, IGetFilesResponse } from '../models/get-files-model';

class FilesService {
  constructor() {}

  static async getFilesData({
    page = 1,
    fileName = '',
    userId,
    typeFile = 'all',
  }: IGetFiles): Promise<IGetFilesResponse> {
    const params = new URLSearchParams();

    if (userId) params.append('user_id', userId);
    if (page) params.append('page', `${page}`);
    if (fileName) params.append('search', fileName);
    if (typeFile) params.append('tipo', typeFile);

    const { data } = await projectApi.get('/api/files', {
      params,
    });
    return data;
  }
}

export default FilesService;
