export interface IUploadFiles {
  userId: string;
  files: File[];
}

export interface IUploadFilesResponse {
  message: string;
  filename: string;
  original_filename: string;
  file_url: string;
  destination_path: string;
}
