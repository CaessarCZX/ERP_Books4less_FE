import { PurchaseOrderFormFields } from '../Models/generate-po-model';

// Intermediary adapter
export interface PurchaseOrder {
  userId: string;
  discountRate: number;
  purchaseInfo: string;
  orderDate: string;
  sellerName: string;
  sellerPO: string;
  sellerAddress: string;
  companyName: string;
  companyAddress: string;
  companyInfo: string;
  shippingMethod: string;
  paymentTerms: string;
  files: File[];
}

interface PurchaseOrderRepository {
  formDataGenerator(purchaseOrder: PurchaseOrder): FormData;
  mapFormFieldsToPurchaseOrder(
    formFields: PurchaseOrderFormFields,
    userId: string,
    files: File[]
  ): PurchaseOrder;
}

export class PurchaseOrderAdapter implements PurchaseOrderRepository {
  formDataGenerator(purchaseOrder: PurchaseOrder): FormData {
    const formData = new FormData();
    formData.append('user_id', purchaseOrder.userId);
    formData.append('discount_rate', purchaseOrder.discountRate.toString());
    formData.append('purchase_info', purchaseOrder.purchaseInfo);
    formData.append('order_date', purchaseOrder.orderDate);
    formData.append('seller_name', purchaseOrder.sellerName);
    formData.append('seller_PO', purchaseOrder.sellerPO);
    formData.append('seller_address', purchaseOrder.sellerAddress);
    formData.append('company_name', purchaseOrder.companyName);
    formData.append('company_address', purchaseOrder.companyAddress);
    formData.append('company_info', purchaseOrder.companyInfo);
    formData.append('shipping_method', purchaseOrder.shippingMethod);
    formData.append('payment_terms', purchaseOrder.paymentTerms);

    purchaseOrder.files.forEach((file) => {
      formData.append('files', file);
    });
    return formData;
  }

  mapFormFieldsToPurchaseOrder(
    formFields: PurchaseOrderFormFields,
    userId: string,
    files: File[]
  ): PurchaseOrder {
    return {
      userId: userId,
      discountRate: formFields.discountPercent,
      purchaseInfo: formFields.purchaseOrderInformation,
      orderDate: formFields.purchaseOrderDate.toISOString(), // Convertir Date a string ISO
      sellerName: formFields.sellerName,
      sellerPO: formFields.sellerPO,
      sellerAddress: formFields.sellerAddress,
      companyName: formFields.enterpriseName,
      companyAddress: formFields.enterpriseAddress,
      companyInfo: formFields.enterpriseData,
      shippingMethod: formFields.shippingMethod,
      paymentTerms: formFields.paymentTerms,
      files: files,
    };
  }
}
