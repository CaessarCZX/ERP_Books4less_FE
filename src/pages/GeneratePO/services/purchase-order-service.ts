import projectApi from '../../../services/api/service.config';
import { PurchaseOrderAdapter } from '../adapters/generate-po-adapter';
import AppConfig from '../../../config';
import {
  IPurchaseOrder,
  IPurchaseOrderResponse,
  PurchaseOrderGenerated,
} from '../Models/generate-po-model';
import { renderArrayNotifications } from '../../../utils/Notification/renderArrayNotifications';

class PurchaseOrderService {
  private inputData: IPurchaseOrder;
  private adapter: PurchaseOrderAdapter;

  constructor(inputData: IPurchaseOrder) {
    this.inputData = inputData;
    this.adapter = new PurchaseOrderAdapter();
  }

  static async postPurchaseOrder(
    formData: FormData
  ): Promise<IPurchaseOrderResponse> {
    const { data } = await projectApi.post('/api/process-all', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }

  getPurchaseOrderLinks(
    purchaseOrderResponse: IPurchaseOrderResponse
  ): PurchaseOrderGenerated {
    const { pdf, csv } = purchaseOrderResponse.download_links;
    return {
      pdf: `${AppConfig.apiUrl}${pdf}`,
      csv: `${AppConfig.apiUrl}${csv}`,
    };
  }

  generateFormData() {
    const data = this.normalizeData();
    return this.adapter.formDataGenerator(data);
  }

  generateNotFoundBooksMessages(purchaseOrderResponse: IPurchaseOrderResponse) {
    const unmatchedBooks =
      purchaseOrderResponse.comparison_results.unmatched_items;
    const unmatchedBooksWithMessage = this.addNotFoundMessage(unmatchedBooks);
    renderArrayNotifications('alert', unmatchedBooksWithMessage, {
      position: 'bottom-right',
      autoClose: 3000,
    });
  }

  private normalizeData() {
    const { data, userId, files } = this.inputData;
    return this.adapter.mapFormFieldsToPurchaseOrder(data, userId, files);
  }

  private addNotFoundMessage(messageArray: string[]) {
    return messageArray.map((msg) => `ISBN not found: ${msg}`);
  }
}

export default PurchaseOrderService;
