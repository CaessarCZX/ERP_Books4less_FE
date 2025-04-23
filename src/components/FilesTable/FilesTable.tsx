import React from 'react';
import { TableHeader } from './components/TableHeader';
import TableRow from './components/TableRow';
import TableRowNotFound from './components/TableRowNotFound';
import { UploadFile } from './models/table-model';
import BoxUI from '../UI/BoxUI';
import { useTranslation } from 'react-i18next';

interface TablaProps {
  data: UploadFile[];
}

const FilesTable: React.FC<TablaProps> = ({ data }) => {
  const { t } = useTranslation();

  const Header = [
    t('filesHistory.fileName'),
    t('filesHistory.type'),
    t('filesHistory.actions'),
    t('filesHistory.date'),
    t('filesHistory.time'),
    t('filesHistory.size'),
  ];

  return (
    <BoxUI className="">
      <div className="max-h-[60vh]">
        <h2 className="text-md ml-6 leading-12 font-medium text-gray-600">
          {t('filesHistory.title')}
        </h2>
        <table className="flex w-full flex-col divide-y divide-gray-200">
          {data.length > 0 && <TableHeader sectionName={Header} />}
          <tbody className="max-h-[50vh] divide-y divide-gray-200 overflow-x-hidden overflow-y-scroll">
            {data.length === 0 ? (
              <TableRowNotFound />
            ) : (
              <>
                {data.map((row, index) => {
                  const { filename, type, actions, date, size } = row;
                  return (
                    <TableRow
                      key={index}
                      filename={filename}
                      type={type}
                      actions={actions}
                      date={date}
                      size={size}
                    />
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </BoxUI>
  );
};

export default FilesTable;
