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
    sectionName: 'POG.t1-reportInfo',
    content: [
      {
        label: 'POG.subt1-repotInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.purchaseOrderInformation,
        id: 'po-i',
        placeholder: '',
        key: 11,
      },
      {
        label: 'POG.subt2-reportInfo',
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
    sectionName: 'POG.t2-sellerInfo',
    content: [
      {
        label: 'POG.subt1-sellerInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.sellerName,
        id: 'sell-n',
        placeholder: '',
        key: 13,
      },
      {
        label: 'POG.subt2-sellerInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.sellerPO,
        id: 'sell-p',
        placeholder: '',
        key: 14,
      },
      {
        label: 'POG.subt3-sellerInfo',
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
    sectionName: 'POG.t3-shippingInfo',
    content: [
      {
        label: 'POG.subt1-shippingInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.enterpriseName,
        id: 'ship-n',
        placeholder: '',
        key: 16,
      },
      {
        label: 'POG.subt2-shippingInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.enterpriseAddress,
        id: 'ship-a',
        placeholder: '',
        key: 17,
      },
      {
        label: 'POG.subt3-shippingInfo',
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
    sectionName: 'POG.t4-enterpriseInfo',
    content: [
      {
        label: 'POG.subt1-enterpriseInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.shippingMethod,
        id: 'ent-s',
        placeholder: '',
        key: 19,
      },
      {
        label: 'POG.subt2-enterpriseInfo',
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
  label: 'POG.discountPer',
  type: 'number',
  step: '0.01',
  name: PurchaseOrderFormFieldNames.discountPercent,
  id: 'dis-per',
  placeholder: '',
  key: 21,
};
