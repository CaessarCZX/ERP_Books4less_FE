import * as Yup from 'yup';

const sqlInjectionRegex =
  /(?:--|['";])|([';"])(?:(?!\\)\1).*\1|(?:\\|\b(?:ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b)/i;

const schema = Yup.object().shape({
  typeFile: Yup.string().required(),
  fileName: Yup.string().test(
    'no-sql-injection',
    'Posible inyección SQL detectada',
    (value?: string) => {
      if (!value) return true;
      return !sqlInjectionRegex.test(value);
    }
  ),
});

export default schema;
