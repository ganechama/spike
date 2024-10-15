'use client';

import React from 'react';

interface ContextMenuProps {
  contextMenu: { mouseX: number; mouseY: number } | null;
  handleClose: () => void;
  options: string[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ contextMenu, handleClose, options }) => {
  if (contextMenu === null) {
    return null;
  }

  return (
    <ul
      className="absolute bg-white border border-gray-300 shadow-md"
      style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
      onClick={handleClose}
    >
      {options.map((option, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          {option}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;
