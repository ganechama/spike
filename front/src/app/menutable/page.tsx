'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import Table from '../../components/MenuTable';
import ContextMenu from '../../components/ContextMenu';
import { SampleData } from '../api/sampledata/route';
import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/navigation'

const Page: React.FC = () => {
  const { data, error } = useSWR<SampleData[]>('/api/sampledata', fetcher);
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number } | null>(null);
  const [menuOptions, setMenuOptions] = useState<{ label: string; path: string; onClick?: () => void }[]>([
    { label: 'Option 1', path: '/option1' },
    { label: 'Option 2', path: '/option2', onClick: () => router.push('table') },
    { label: 'Option 3', path: '/option3' },
  ]);
  const router = useRouter();


  const handleContextMenu = (event: React.MouseEvent, row: { [key: string]: string | number }) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null,
    );
    setMenuOptions([
      { label: 'Edit', path: `/edit/${row.id}`, onClick: () => router.push('table') },
      { label: 'Delete', path: `/delete/${row.id}` },
    ]);
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Table Page</h1>
      {error ? (
        <p className="text-center text-gray-600">エラーが発生しました</p>
      ) : !data ? (
        <p className="text-center text-gray-600">データの取得しちゃうよん</p>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-600">データが空です</p>
      ) : (
        <Table data={data} onContextMenu={handleContextMenu} />
      )}
      <ContextMenu contextMenu={contextMenu} handleClose={handleClose} options={menuOptions} />
    </div>
  );
};

export default Page;

