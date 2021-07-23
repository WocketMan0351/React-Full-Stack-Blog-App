import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className='bg-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            className='inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-gray-900 text-4xl font-bold sans-serif tracking-widest'
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
            About Me
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            className='mr-4'
            style={{ height: 35, width: 35 }}
            network='twitter'
            fgColor='white'
            url='https://twitter.com/SovereignSB_'
            target='_blank'
          />
          <SocialIcon
            className='mr-4'
            style={{ height: 35, width: 35 }}
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
