import projectApi from '../../../services/api/service.config';
import { PurchaseOrderAdapter } from '../adapters/generate-po-adapter';
import AppConfig from '../../../config';
import {
  IPurchaseOrder,
  IPurchaseOrderResponse,
  PurchaseOrderGenerated,
} from '../Models/generate-po-model';

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

  static getPurchaseOrderLinks(
    purchaseOrderResponse: IPurchaseOrderResponse
  ): PurchaseOrderGenerated {
    const { pdf, csv } = purchaseOrderResponse.download_links;
    return {
      pdf: `${AppConfig.apiUrl}${pdf}`,
      csv: `${AppConfig.apiUrl}${csv}`,
    };
  }

  private normalizeData() {
    const { data, userId, files } = this.inputData;
    return this.adapter.mapFormFieldsToPurchaseOrder(data, userId, files);
  }

  generateFormData() {
    const data = this.normalizeData();
    return this.adapter.formDataGenerator(data);
  }
}

export default PurchaseOrderService;
