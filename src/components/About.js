import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import Particles from 'react-tsparticles';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author'] {
        name,
        bio,
        'authorImage': image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <div className='flex justify-center text-3xl'>Loading...</div>;
  }

  return (
    // <main className='relative'>
    //   <Particles
    //     className='absolute'
    //     style={{ height: 'auto', width: '100%' }}
    //     id='tsparticles'
    //     options={{
    //       background: {
    //         color: {
    //           value: '#E5E7EB',
    //         },
    //       },
    //       fpsLimit: 60,
    //       interactivity: {
    //         detectsOn: 'canvas',
    //         events: {
    //           onClick: {
    //             enable: true,
    //             mode: 'push',
    //           },
    //           onHover: {
    //             enable: true,
    //             mode: 'repulse',
    //           },
    //           resize: true,
    //         },
    //         modes: {
    //           bubble: {
    //             distance: 400,
    //             duration: 2,
    //             opacity: 0.8,
    //             size: 40,
    //           },
    //           push: {
    //             quantity: 4,
    //           },
    //           repulse: {
    //             distance: 100,
    //             duration: 0.4,
    //           },
    //         },
    //       },
    //       particles: {
    //         color: {
    //           value: '#FF9900',
    //         },
    //         links: {
    //           color: '#2563EB',
    //           distance: 200,
    //           enable: true,
    //           opacity: 1,
    //           width: 1,
    //         },
    //         collisions: {
    //           enable: true,
    //         },
    //         move: {
    //           direction: 'none',
    //           enable: true,
    //           outMode: 'bounce',
    //           random: false,
    //           speed: 3,
    //           straight: false,
    //         },
    //         number: {
    //           density: {
    //             enable: true,
    //             value_area: 1000,
    //           },
    //           value: 80,
    //         },
    //         opacity: {
    //           value: 1.9,
    //         },
    //         shape: {
    //           type: 'circle',
    //         },
    //         size: {
    //           random: true,
    //           value: 4,
    //         },
    //       },
    //       detectRetina: true,
    //     }}
    //   />
    <main className='bg-blue-100 min-h-screen p-12'>
      <div className='p-8 lg:pt-36 container mx-auto relative'>
        <section className='bg-white bg-opacity-80 rounded-lg shadow-2xl lg:flex p-10'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-20 h-20 lg:w-50 lg:h-50 mr-8'
          />
          <div className='text-md flex flex-col justify-center'>
            <h1 className='text-2xl text blue 300 mb-3'>
              Sup dude, I'm <span>{author.name} bitch!!</span>
            </h1>
            <div className='prose lg:prose-xl'>
              <BlockContent
                blocks={author.bio}
                projectId='f7olvu4h'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
