import React, { useState } from 'react';
import MenuTable from '../../components/MenuTable';

const sampleData = [
  { name: 'John Doe', age: 28, occupation: 'Engineer' },
  { name: 'Jane Smith', age: 34, occupation: 'Designer' },
  { name: 'Sam Johnson', age: 45, occupation: 'Manager' },
];

const Page: React.FC = () => {
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number } | null>(null);
  const [showMenu, setShowMenu] = useState(true);

  const handleContextMenu = (event: React.MouseEvent, value: string | number) => {
    event.preventDefault();
    if (showMenu) {
      setContextMenu(
        contextMenu === null
          ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
          : null,
      );
    }
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Table Page</h1>
      <button onClick={() => setShowMenu(!showMenu)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Context Menu
      </button>
      <MenuTable data={sampleData} onContextMenu={handleContextMenu} />
      {contextMenu !== null && (
        <ul
          className="absolute bg-white border border-gray-300 shadow-md"
          style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
          onClick={handleClose}
        >
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Page;
