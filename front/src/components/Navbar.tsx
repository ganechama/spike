import type { NextPage } from 'next';
import Link from 'next/link';

const Navbar: NextPage = () => {
  return (
    <nav className="bg-white py-4 w-full border-b border-gray-200">
      <div className="flex items-center justify-between pl-4">
        <h1 className="text-xl font-bold text-black">
          <Link href="/">
            NEXTSPIKE
          </Link>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.758 6 8.804 6 11v5.158A2.032 2.032 0 016.405 18H9a2 2 0 110 4h5.595l1.405-1.405zM9 18h2v-2H9v2zm0-3h2v-2H9v2zm0-3h2V9H9v2z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

