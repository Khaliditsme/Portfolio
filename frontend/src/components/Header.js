import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.svg';
const Header = () => {
  return (
    <div className='flex justify-around items-center'>
      <div className='font-semibold sm:text-2xl md:text-4xl lg:text-5xl sm:m-2 md:m-2 lg:m-2 flex flex-row justify-center items-center sm:h-5 md:h-6 lg:5'>
        {/* <img src={logo} alt="" className="sm:w-[30%] md:w-[50%] lg:w-[50%] border-2 border-black sm:h-3 md:h-5 lg:h-6" /> */}
        <Link to='/' className='font-thin'>
          Khalid Meraj
        </Link>
      </div>
      <div>
        <ul className='flex mr-4 items-center sm:m-2 md:m-3 lg:m-6'>
          <li className='sm:text-1xl md:text-2xl lg:text-3xl sm:mr-1 md:mr-2 lg:mr-2 text-red'>
            {' '}
            <Link to='/resume'>Resume</Link>
          </li>
          <li className='sm:text-1xl md:text-2xl lg:text-3xl'>|</li>
          <li className='sm:text-1xl md:text-2xl lg:text-3xl sm:ml-1 md:ml-2 lg:ml-2 sm:mr-1 md:mr-2 lg:mr-2 text-red'>
            {' '}
            <Link to='/project'>Project</Link>
          </li>
          <li className='sm:text-1xl md:text-2xl lg:text-3xl'>|</li>
          <li className='sm:text-1xl md:text-2xl lg:text-3xl sm:ml-1 md:ml-2 lg:ml- text-red'>
            {' '}
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
