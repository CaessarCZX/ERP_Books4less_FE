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
        placeholder: 'MO071205',
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
        placeholder: 'Hachette Book Group USA',
        key: 13,
      },
      {
        label: 'POG.subt2-sellerInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.sellerPO,
        id: 'sell-p',
        placeholder: 'P.O. Box 8828',
        key: 14,
      },
      {
        label: 'POG.subt3-sellerInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.sellerAddress,
        id: 'sell-a',
        placeholder: 'Boston, MA 02114-8828',
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
        placeholder: 'Books For Less LLC',
        key: 16,
      },
      {
        label: 'POG.subt2-shippingInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.enterpriseAddress,
        id: 'ship-a',
        placeholder: '1859 Dacusville Hwy.',
        key: 17,
      },
      {
        label: 'POG.subt3-shippingInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.enterpriseData,
        id: 'ship-d',
        placeholder: 'Easley, SC 29640',
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
        placeholder: 'Email rousting form: indbounds@bks4less.com',
        key: 19,
      },
      {
        label: 'POG.subt2-enterpriseInfo',
        type: 'text',
        name: PurchaseOrderFormFieldNames.paymentTerms,
        id: 'ent-p',
        placeholder: 'Net 90 Days',
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
  placeholder: '9',
  key: 21,
};
