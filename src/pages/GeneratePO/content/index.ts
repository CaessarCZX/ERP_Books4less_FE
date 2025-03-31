import { ReactNode } from 'react';

interface IForm {
  sectionName: string;
  content: IFields[];
  key: number;
}

interface IFields {
  icon?: ReactNode;
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  key: number;
}

export const FormContent: IForm[] = [
  {
    sectionName: 'Report information',
    content: [
      {
        label: 'Purchase Order Information',
        type: 'text',
        name: 'po-inf',
        id: 'po-i',
        placeholder: '',
        key: 11,
      },
      {
        label: 'Purchase Order Date',
        type: 'date',
        name: 'po-date',
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
        name: 'sell-nam',
        id: 'sell-n',
        placeholder: '',
        key: 13,
      },
      {
        label: 'Seller P.O',
        type: 'text',
        name: 'sell-po',
        id: 'sell-p',
        placeholder: '',
        key: 14,
      },
      {
        label: 'Seller address',
        type: 'text',
        name: 'sell-addr',
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
        name: 'ship-nam',
        id: 'ship-n',
        placeholder: '',
        key: 16,
      },
      {
        label: 'Enterprise address',
        type: 'text',
        name: 'ship-addr',
        id: 'ship-a',
        placeholder: '',
        key: 17,
      },
      {
        label: 'Enterprise data',
        type: 'text',
        name: 'ship-dat',
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
        name: 'ent-ship',
        id: 'ent-s',
        placeholder: '',
        key: 19,
      },
      {
        label: 'Payment terms',
        type: 'text',
        name: 'ent-pt',
        id: 'ent-p',
        placeholder: '',
        key: 20,
      },
    ],
    key: 1286896,
  },
];
