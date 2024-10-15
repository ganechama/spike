import React from 'react';

interface TableProps {
  data: { [key: string]: string | number }[];
  onContextMenu: (event: React.MouseEvent, value: string | number) => void;
}

const MenuTable: React.FC<TableProps> = ({ data, onContextMenu }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td
                  key={i}
                  className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
                  onContextMenu={(event) => onContextMenu(event, value)}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;
