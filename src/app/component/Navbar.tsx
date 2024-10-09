import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='mx-10 border-b-2 border-b-black'>
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center justify-between w-full px-8">
          <div className="flex items-center">
            <Link href={'/'}>
              <div className="flex items-center">
                <img src='./Logo.png' alt='Logo' className='h-[50px] w-auto mr-4' />
                <div className='text-2xl font-bold'>Hereditary Blood</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;