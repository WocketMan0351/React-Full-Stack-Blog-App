import React from 'react';

export default function Home() {
  return (
    <main className='bg-blue-100 min-h-screen p-12'>
      {/* <img src={} className='absolute object-contain w-auto h-auto' /> */}
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-10'>
        <h1 className='text-6xl text-black font-bold sans-serif leading-none lg: leading-snug home-name z-50'>
          Bitcoin. The separation of money and state.
        </h1>
      </section>
    </main>
  );
}
