import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../images/btc.png';

export default function NavBar() {
  return (
    <header className='bg-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            className='inflex-flex flex justify-center items-center py-6 px-3 mx-3 sm:mx-0'
          >
            <img
              src={logo}
              className='lg:w-16 lg:h-16 md:w-16 md:h-16 w-12 h-12'
            />
          </NavLink>
          <NavLink
            to='/'
            exact
            className='inflex-flex flex justify-center items-center py-6 px-0 sm:px-3 mr-3 text-white hover:text-gray-900 sm:text-3xl font-bold sans-serif tracking-widest'
          >
            Home
          </NavLink>
          <NavLink
            to='/post'
            activeClassName='bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-900'
          >
            Articles
          </NavLink>
          <NavLink
            to='/video'
            activeClassName='bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-900'
          >
            Videos
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-900'
          >
            About
          </NavLink>
        </nav>
        <div className='inline-flex flex justify-center py-3 px-3 my-6'>
          <SocialIcon
            className='mr-4'
            style={{ height: 30, width: 30 }}
            network='twitter'
            fgColor='white'
            url='https://twitter.com/SovereignSB_'
            target='_blank'
          />
          <SocialIcon
            className='mr-4'
            style={{ height: 30, width: 30 }}
            network='telegram'
            fgColor='white'
            url='http://t.me/'
            target='_blank'
          />
        </div>
      </div>
    </header>
  );
}
