import { PurchaseOrderFormFieldNames as Fields } from '../Models/generate-po-model';

interface MinMaxVal {
  quantity: number;
  message: string;
}

interface Test<T extends string | number | object> {
  name: string;
  message: string;
  test: (val: T) => boolean;
}

interface ValidationPerField {
  required: string;
  min: MinMaxVal;
  max: MinMaxVal;
  test?: Test<string | number | object>[];
}

const FORM_VALIDATION_MSG: { [key: string]: ValidationPerField } =
  Object.freeze({
    [Fields.purchaseOrderInformation]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.purchaseOrderDate]: {
      required: 'This field is required',
      min: {
        quantity: 0,
        message: '',
      },
      max: {
        quantity: 0,
        message: '',
      },
    },
    [Fields.sellerName]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.sellerPO]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.sellerAddress]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.enterpriseName]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.enterpriseAddress]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.enterpriseData]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.shippingMethod]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.paymentTerms]: {
      required: 'This field is required',
      min: {
        quantity: 3,
        message: 'The field must contain at least 3 chars',
      },
      max: {
        quantity: 100,
        message: '',
      },
    },
    [Fields.discountPercent]: {
      required: 'This field is required',
      min: {
        quantity: 0,
        message: 'Minimum value is zero',
      },
      max: {
        quantity: 100,
        message: 'Maximum value is 100',
      },
      // test: [
      //   {
      //     name: '',
      //     message: '',
      //     test: (value) => value === undefined || value === null || !isNaN(value)
      //   },
      // ],
    },
  });

export default FORM_VALIDATION_MSG;
