import projectApi from '../../../services/api/service.config';
import { PurchaseOrderAdapter } from '../adapters/generate-po-adapter';
import { serverURL } from '../../../services/api/service.config';
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
    purchaseOrderGenerated: PurchaseOrderGenerated
  ): PurchaseOrderGenerated {
    const { pdf, csv } = purchaseOrderGenerated;
    const DOWNLOAD_PDF = '/download/pdf';
    const DOWNLOAD_CSV = '/download/csv';
    return {
      pdf: `${serverURL}${DOWNLOAD_PDF}?filename=${pdf}`,
      csv: `${serverURL}${DOWNLOAD_CSV}?filename=${csv}`,
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
