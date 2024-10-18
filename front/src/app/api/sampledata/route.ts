import { UUID } from 'crypto';
import { NextResponse } from 'next/server';

export type SampleData = {
  id: UUID;
  name: string;
  age: number;
  occupation: string;
};

export async function GET(): Promise<NextResponse<SampleData[]>> {
  const sampleData: SampleData[] = [
    { id: '123e4567-e89b-12d3-a456-426614174000', name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: '123e4567-e89b-12d3-a456-426614174002', name: 'Sam Johnson', age: 45, occupation: 'Manager' },
  ];

  return NextResponse.json(sampleData);
}

