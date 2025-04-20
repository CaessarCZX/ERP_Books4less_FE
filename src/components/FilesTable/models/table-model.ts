import { FileType } from '../../../models/get-files-model';

export interface UploadFile {
  filename: string;
  type: FileType;
  actions: string;
  date: string;
  size: string;
}
