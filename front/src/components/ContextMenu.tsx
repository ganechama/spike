'use client';

import React from 'react';
import { useRouter } from 'next/navigation'

interface ContextMenuProps {
  contextMenu: { mouseX: number; mouseY: number } | null;
  handleClose: () => void;
  options: { label: string; path: string; onClick?: () => void }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ contextMenu, handleClose, options }) => {
  const router = useRouter();

  if (contextMenu === null) {
    return null;
  }

  const handleMenuClick = (option: { label: string; path: string; onClick?: () => void }) => {
    if (option.onClick) {
      option.onClick();
    } else {
      handleClose();
      router.push(option.path);
    }
  };

  return (
    <ul
      className="absolute bg-white border border-gray-300 shadow-md"
      style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
      onClick={handleClose}
    >
      {options.map((option, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleMenuClick(option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;