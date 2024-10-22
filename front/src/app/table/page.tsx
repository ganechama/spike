import React from 'react';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';

const data = [
  { Name: 'John Doe', Age: 28, Email: 'john@example.com',Sex: 'Female' },
  { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com',Sex: 'Male' },
  { Name: 'Sam Green', Age: 45, Email: 'sam@example.com',Sex: 'Male' },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <Table data={data} />
    </div>
  );
};

export default Home;

