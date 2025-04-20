import { FileType } from '../../../models/get-files-model';
import csvSmall from '../../../assets/icons/CSV-SM.svg';
import csv from '../../../assets/icons/CSV.svg';
import excelSmall from '../../../assets/icons/EXCEL-SM.svg';
import excel from '../../../assets/icons/EXCEL.svg';
import pdfSmall from '../../../assets/icons/PDF-SM.svg';
import pdf from '../../../assets/icons/PDF.svg';

export const getIconByType = (type: FileType) => {
  const smallIcon =
    type === 'csv' ? csvSmall : type === 'pdf' ? pdfSmall : excelSmall;
  const normalIcon = type === 'csv' ? csv : type === 'pdf' ? pdf : excel;
  return { smallIcon, normalIcon };
};
