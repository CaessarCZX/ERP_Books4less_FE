import React from 'react';
import { TableHeader } from './components/TableHeader';
import TableRow from './components/TableRow';
import TableRowNotFound from './components/TableRowNotFound';
import { UploadFile } from './models/table-model';
import BoxUI from '../UI/BoxUI';

interface TablaProps {
  data: UploadFile[];
}

const FilesTable: React.FC<TablaProps> = ({ data }) => {
  const Header = ['filename', 'type', 'actions', 'date', 'time', 'size'];

  return (
    <BoxUI className="">
      <div className="max-h-[60vh]">
        <h2 className="text-md ml-6 leading-12 font-medium text-gray-600">
          All files generated
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
