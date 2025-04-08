import * as yup from 'yup';
import val from '../utils/validation-msg';

const {
  purchaseOrderInformation,
  purchaseOrderDate,
  sellerName,
  sellerPO,
  sellerAddress,
  enterpriseName,
  enterpriseAddress,
  enterpriseData,
  shippingMethod,
  paymentTerms,
  discountPercent,
} = val;

const FormSchema = yup
  .object({
    purchaseOrderInformation: yup
      .string()
      .required(purchaseOrderInformation.required)
      .min(
        purchaseOrderInformation.min.quantity,
        purchaseOrderInformation.min.message
      ),
    purchaseOrderDate: yup.date().required(purchaseOrderDate.required),
    sellerName: yup
      .string()
      .required(sellerName.required)
      .min(sellerName.min.quantity, sellerName.min.message),
    sellerPO: yup
      .string()
      .required(sellerPO.required)
      .min(sellerPO.min.quantity, sellerPO.min.message),
    sellerAddress: yup
      .string()
      .required(sellerAddress.required)
      .min(sellerAddress.min.quantity, sellerAddress.min.message),
    enterpriseName: yup
      .string()
      .required(enterpriseName.required)
      .min(enterpriseAddress.min.quantity, enterpriseName.min.message),
    enterpriseAddress: yup
      .string()
      .required(enterpriseAddress.required)
      .min(enterpriseAddress.min.quantity, enterpriseAddress.min.message),
    enterpriseData: yup
      .string()
      .required(enterpriseData.required)
      .min(enterpriseData.min.quantity, enterpriseData.min.message),
    shippingMethod: yup
      .string()
      .required(shippingMethod.required)
      .min(shippingMethod.min.quantity, shippingMethod.min.message),
    paymentTerms: yup
      .string()
      .required(paymentTerms.required)
      .min(paymentTerms.min.quantity, paymentTerms.min.message),
    discountPercent: yup
      .number()
      .typeError('Debe ser un número')
      .required(discountPercent.required)
      .min(discountPercent.min.quantity, discountPercent.min.message)
      .max(discountPercent.max.quantity, discountPercent.max.message)
      .test(
        'is-decimal',
        'Must be a decimal',
        (value) => value === undefined || value === null || !isNaN(value)
      )
      .test(
        'is-within-range',
        'The range must be between 0 and 100',
        (value) =>
          value === undefined || value === null || (value >= 0 && value <= 100)
      ),
  })
  .required();

export default FormSchema;
