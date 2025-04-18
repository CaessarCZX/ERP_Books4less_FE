import { FC } from 'react';

interface Props {
  sectionName: string[];
}

export const TableHeader: FC<Props> = ({ sectionName }) => {
  return (
    <thead className="bg-transparent">
      <tr className="grid grid-cols-6 md:grid-cols-8">
        {sectionName.map((name, index) => {
          const ColumnName = name.toLocaleUpperCase();
          return (
            <th
              key={index}
              className={`${index === 0 ? 'col-span-2 md:col-span-3' : ''} ${index === sectionName.length - 1 ? 'hidden md:block' : ''} px-3 py-1 text-left text-[10px] font-medium tracking-wider text-gray-500 uppercase md:px-6 md:py-3`}
            >
              {ColumnName}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
