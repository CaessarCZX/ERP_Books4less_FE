import { ReactNode } from 'react';

export interface IForm {
  sectionName: string;
  content: IFields[];
  key: number;
}

export interface IFields {
  icon?: ReactNode;
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  key: number;
}

export enum PurchaseOrderFormFieldNames {
  purchaseOrderInformation = 'purchaseOrderInformation',
  purchaseOrderDate = 'purchaseOrderDate',
  sellerName = 'sellerName',
  sellerPO = 'sellerPO',
  sellerAddress = 'sellerAddress',
  enterpriseName = 'enterpriseName',
  enterpriseAddress = 'enterpriseAddress',
  enterpriseData = 'enterpriseData',
  shippingMethod = 'shippingMethod',
  paymentTerms = 'paymentTerms',
  discountPercent = 'discountPercent',
}

export interface PurchaseOrderFormFields {
  purchaseOrderInformation: string;
  purchaseOrderDate: Date;
  sellerName: string;
  sellerPO: string;
  sellerAddress: string;
  enterpriseName: string;
  enterpriseAddress: string;
  enterpriseData: string;
  shippingMethod: string;
  paymentTerms: string;
  discountPercent: number;
}

export interface IPurchaseOrder {
  data: PurchaseOrderFormFields;
  userId: string;
  files: File[];
}

interface RenamedFiles {
  original: string;
  new: string;
  reason: string;
}

interface UpdatedFiles {
  original_name: string;
  stored_name: string;
}

export interface IPurchaseOrderResponse {
  message: string;
  uploaded_files: UpdatedFiles;
  renamed_files: RenamedFiles;
  csv: string;
  pdf: string;
  errors: string;
}

export interface PurchaseOrderGenerated {
  pdf: string;
  csv: string;
}
