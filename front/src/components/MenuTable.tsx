import React from 'react';

interface TableProps {
  data: { [key: string]: string | number }[];
  onContextMenu: (event: React.MouseEvent, row: { [key: string]: string | number }) => void;
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
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {Object.values(row).map((value, i) => (
                <td
                  key={i}
                  className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
                  onContextMenu={(event) => onContextMenu(event, row)}
                >
                  {value}
                </td>
              ))}
              <td
                className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
                onContextMenu={(event) => onContextMenu(event, row)}
              >
                <button
                  onClick={(event) => onContextMenu(event, row)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  ⋮
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;
