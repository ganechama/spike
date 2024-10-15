'use client';

import React, { useState } from 'react';
import Table from '../../components/MenuTable';
import ContextMenu from '../../components/ContextMenu';

const sampleData = [
  { name: 'John Doe', age: 28, occupation: 'Engineer' },
  { name: 'Jane Smith', age: 34, occupation: 'Designer' },
  { name: 'Sam Johnson', age: 45, occupation: 'Manager' },
];

const Page: React.FC = () => {
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number } | null>(null);
  const [menuOptions, setMenuOptions] = useState<string[]>(['Option 1', 'Option 2', 'Option 3']);

  const handleContextMenu = (event: React.MouseEvent, row: { [key: string]: string | number }) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Table Page</h1>
      <Table data={sampleData} onContextMenu={handleContextMenu} />
      <ContextMenu contextMenu={contextMenu} handleClose={handleClose} options={menuOptions} />
    </div>
  );
};

export default Page;
