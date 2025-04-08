import {
  PurchaseOrderFormFieldNames,
  PurchaseOrderFormFields,
  IFields,
  IForm,
} from '../Models/generate-po-model';

export const FormFieldsDefaultValues: PurchaseOrderFormFields = {
  [PurchaseOrderFormFieldNames.purchaseOrderInformation]: '',
  [PurchaseOrderFormFieldNames.purchaseOrderDate]: new Date(),
  [PurchaseOrderFormFieldNames.sellerName]: '',
  [PurchaseOrderFormFieldNames.sellerPO]: '',
  [PurchaseOrderFormFieldNames.sellerAddress]: '',
  [PurchaseOrderFormFieldNames.enterpriseName]: '',
  [PurchaseOrderFormFieldNames.enterpriseAddress]: '',
  [PurchaseOrderFormFieldNames.enterpriseData]: '',
  [PurchaseOrderFormFieldNames.shippingMethod]: '',
  [PurchaseOrderFormFieldNames.paymentTerms]: '',
  [PurchaseOrderFormFieldNames.discountPercent]: 0,
};

export const FormContent: IForm[] = [
  {
    sectionName: 'Report information',
    content: [
      {
        label: 'Purchase Order Information',
        type: 'text',
        name: PurchaseOrderFormFieldNames.purchaseOrderInformation,
        id: 'po-i',
        placeholder: '',
        key: 11,
      },
      {
        label: 'Purchase Order Date',
        type: 'date',
        name: PurchaseOrderFormFieldNames.purchaseOrderDate,
        id: 'po-d',
        placeholder: '',
        key: 12,
      },
    ],
    key: 34234534,
  },
  {
    sectionName: 'Seller information',
    content: [
      {
        label: 'Seller name',
        type: 'text',
        name: PurchaseOrderFormFieldNames.sellerName,
        id: 'sell-n',
        placeholder: '',
        key: 13,
      },
      {
        label: 'Seller P.O',
        type: 'text',
        name: PurchaseOrderFormFieldNames.sellerPO,
        id: 'sell-p',
        placeholder: '',
        key: 14,
      },
      {
        label: 'Seller address',
        type: 'text',
        name: PurchaseOrderFormFieldNames.sellerAddress,
        id: 'sell-a',
        placeholder: '',
        key: 15,
      },
    ],
    key: 3459212,
  },
  {
    sectionName: 'Shipping information',
    content: [
      {
        label: 'Enterprise name',
        type: 'text',
        name: PurchaseOrderFormFieldNames.enterpriseName,
        id: 'ship-n',
        placeholder: '',
        key: 16,
      },
      {
        label: 'Enterprise address',
        type: 'text',
        name: PurchaseOrderFormFieldNames.enterpriseAddress,
        id: 'ship-a',
        placeholder: '',
        key: 17,
      },
      {
        label: 'Enterprise data',
        type: 'text',
        name: PurchaseOrderFormFieldNames.enterpriseData,
        id: 'ship-d',
        placeholder: '',
        key: 18,
      },
    ],
    key: 6432344,
  },
  {
    sectionName: 'Enterprise information',
    content: [
      {
        label: 'Shipping method',
        type: 'text',
        name: PurchaseOrderFormFieldNames.shippingMethod,
        id: 'ent-s',
        placeholder: '',
        key: 19,
      },
      {
        label: 'Payment terms',
        type: 'text',
        name: PurchaseOrderFormFieldNames.paymentTerms,
        id: 'ent-p',
        placeholder: '',
        key: 20,
      },
    ],
    key: 1286896,
  },
];

export const FormContentPercentage: IFields & { step: string } = {
  label: 'Discount Percentage %',
  type: 'number',
  step: '0.01',
  name: PurchaseOrderFormFieldNames.discountPercent,
  id: 'dis-per',
  placeholder: '',
  key: 21,
};
