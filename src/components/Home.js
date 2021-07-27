import React from 'react';
import Particles from 'react-tsparticles';

export default function Home() {
  return (
    <main className='bg-blue-100 min-h-screen p-2'>
      {/* <img src={} className='absolute object-contain w-auto h-auto' /> */}{' '}
      <Particles
        className='absolute'
        style={{ height: 'auto', width: '100%' }}
        id='tsparticles'
        options={{
          background: {
            color: {
              value: 'white',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#FF9900',
            },
            links: {
              color: '#2563EB',
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1800,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-40 lg:px-45 px-20'>
        <h1 className='lg:text-5xl lg:leading-relaxed md:leading-relaxed md:text-2xl md:leading-relaxed text-black font-bold sans-serif home-name z-50'>
          Bitcoin (BTC). Peer-to-peer, decentralized money without government or
          banks. There will only ever be 21,000,000 BTC and it's impossible for
          anyone to make more. Sats are the base unit of BTC with 100,000,000
          sats equaling 1 BTC.
        </h1>
      </section>
    </main>
  );
}
