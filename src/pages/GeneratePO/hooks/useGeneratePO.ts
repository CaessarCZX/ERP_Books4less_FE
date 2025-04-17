import { useMutation } from '@tanstack/react-query';
import PurchaseOrderService from '../services/purchase-order-service';
import { IPurchaseOrder } from '../Models/generate-po-model';
import useDisplayNotifications from '../../../hooks/useDisplayNotifications';
import { AxiosError } from 'axios';

export const useGeneratePO = () => {
  const { setError, setSuccess } = useDisplayNotifications();
  const mutation = useMutation({
    mutationFn: PurchaseOrderService.postPurchaseOrder,
  });

  const generatePO = async (data: IPurchaseOrder) => {
    try {
      const formData = new PurchaseOrderService(data).generateFormData();
      const res = await mutation.mutateAsync(formData);
      setSuccess(res.message || 'Purchase Order generated successfully.');
      const purchaseOrder = PurchaseOrderService.getPurchaseOrderLinks(res);
      return purchaseOrder;
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
    generatePO,
  };
};
