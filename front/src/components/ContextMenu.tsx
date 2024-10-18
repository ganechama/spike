'use client';

import React from 'react';
import { useRouter } from 'next/navigation'

// コンテキストメニューのProps
interface ContextMenuProps {
  // コンテキストメニューの座標
  contextMenu: { mouseX: number; mouseY: number } | null;
  // コンテキストメニューを閉じる関数
  handleClose: () => void;
  // コンテキストメニューの項目
  options: { label: string; path: string; onClick?: () => void }[];
}

// コンテキストメニュー
const ContextMenu: React.FC<ContextMenuProps> = ({ contextMenu, handleClose, options }) => {
  const router = useRouter();

  // コンテキストメニューがnullの場合は何も描画しない
  if (contextMenu === null) {
    return null;
  }

  // メニューの項目をクリックした時のハンドラ
  const handleMenuClick = (option: { label: string; path: string; onClick?: () => void }) => {
    // itemにonClickが設定されている場合はそちらを優先する
    if (option.onClick) {
      option.onClick();
    } else {
      // コンテキストメニューを閉じて、pathに遷移する
      handleClose();
      router.push(option.path);
    }
  };

  return (
    // コンテキストメニューを描画
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
