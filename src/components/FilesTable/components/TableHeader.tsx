import { FC } from 'react';

interface Props {
  sectionName: string[];
}

export const TableHeader: FC<Props> = ({ sectionName }) => {
  return (
    <thead className="bg-transparent">
      <tr>
        {sectionName.map((name, index) => {
          const ColumnName = name.toLocaleUpperCase();
          return (
            <th
              key={index}
              className="px-3 py-1 text-left text-[10px] font-medium tracking-wider text-gray-500 uppercase md:px-6 md:py-3"
            >
              {ColumnName}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
