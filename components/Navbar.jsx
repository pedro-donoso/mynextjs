import Link from 'next/link';
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className='navbar py-5 bg-gray-800 flex h-16 items-center justify-between'>
      <Link href="/">
      <h1 className='text-3xl font-bold text-yellow-400'>Nextjs Curso</h1>
      </Link>
      
      <ul>
        <li className='bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded'>
          <Link href="/">Home</Link>
        </li>
        <li className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
          <Link href="/about">About</Link>
        </li>
        <li className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
