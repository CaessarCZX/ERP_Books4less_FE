import { useMutation } from '@tanstack/react-query';
import { useDisplayNotifications } from '../../../hooks';
import { AxiosError } from 'axios';
import UpdateBooksService from '../services/update-books-service';
import { IUpdateReference } from '../models/update-books-model';

export const useUploadReferences = () => {
  const { setError, setSuccess } = useDisplayNotifications();
  const mutation = useMutation({
    mutationFn: UpdateBooksService.postUpdateBooks,
  });

  const uploadReferences = async (data: IUpdateReference) => {
    try {
      const service = new UpdateBooksService(data);
      const formData = service.generateFormData();
      const res = await mutation.mutateAsync(formData);
      // if (res.errors) service.renderFoundErrors(res.errors);

      setSuccess(res.message || 'Purchase Order generated successfully.');
      return res;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        setError(
          e.response?.data?.error ||
            e.message ||
            'An error occurred while generating the purchase order.'
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
    uploadReferences,
  };
};
