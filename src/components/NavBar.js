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
              className='lg:w-16 lg:h-16 md:w-16 md:h-16 w-12 h-12 hidden md:block'
            />
          </NavLink>
          <NavLink
            to='/'
            exact
            className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-900'
          >
            Home
          </NavLink>
          <NavLink
            to='/post'
            activeClassName='bg-blue-700'
            className='inline-flex items-center py-2 px-2 my-6 rounded text-white hover:text-gray-900'
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
          <NavLink
            to='/business'
            activeClassName='bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 mr-6 rounded text-white hover:text-gray-900'
          >
            Sovereign Businesses
          </NavLink>
        </nav>
        <div className='hidden sm:inline-flex flex justify-center py-3 px-3 my-6'>
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
            network='youtube'
            fgColor='white'
            url='https://www.youtube.com/'
            target='_blank'
          />
          <SocialIcon
            className='mr-4'
            style={{ height: 30, width: 30 }}
            network='instagram'
            fgColor='white'
            url='https://www.instagram.com/'
            target='_blank'
          />
          <SocialIcon
            className='mr-4'
            style={{ height: 30, width: 30 }}
            network='facebook'
            fgColor='white'
            url='https://www.facebook.com/'
            target='_blank'
          />
        </div>
      </div>
    </header>
  );
}
