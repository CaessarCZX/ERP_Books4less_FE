import { useMutation } from '@tanstack/react-query';
import { useDisplayNotifications } from '../../../hooks';
import { AxiosError } from 'axios';
import UploadBooksToServerService from '../services/upload-book-server-service';
import { IUploadFiles } from '../models/upload-files-model';

export const useUploadFiles = () => {
  const { setError, setSuccess } = useDisplayNotifications();
  const mutation = useMutation({
    mutationFn: UploadBooksToServerService.postUploadBooks,
  });

  const uploadFiles = async (data: IUploadFiles) => {
    try {
      const service = new UploadBooksToServerService(data);
      const formData = service.generateFormData();
      const res = await mutation.mutateAsync(formData);
      // if (res.errors) service.renderFoundErrors(res.errors);

      setSuccess(res.message || 'Upload Files successfully.');
      return res;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        setError(
          e.response?.data?.error ||
            e.message ||
            'An error occurred while trying upload files to server.'
        );
      } else if (e instanceof Error) {
        setError(e.message || 'An unknown error occurred.');
      } else {
        setError('An unexpected error occurred.');
      }
      return null;
    }
  };

  return {
    mutation,
    uploadFiles,
  };
};
