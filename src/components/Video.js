import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

export default function Video() {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'video']{
          title,
          date,
          author, 
          date,
          description,
          link,
          tags
        }`
      )
      .then((data) => setVideoData(data))
      .catch(console.error);
  }, []);

  if (!videoData) {
    return <div className='flex justify-center text-3xl'>Loading...</div>;
  }

  return (
    <main className='bg-blue-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-4xl flex justify-center'>Helpful Videos</h1>
        <h2 className='text-lg text-gray-600 flex justify-center my-5'>
          These are helpful videos to aid in understanding bitcoin.
        </h2>
        <section className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-3'>
          {videoData &&
            videoData.map((video, index) => (
              <article className='relative rounded-lg shadow-xl bg-white p-12'>
                <h3 className='text-gray-800 font-bold mb-2 hover:text-blue-700 md:text-xl'>
                  <a
                    href={video.link}
                    key={index}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {video.title}
                  </a>
                </h3>
                <div className='text-gray-500 text-sm md:text-xs'>
                  <span>
                    <strong className='font-bold'>Created on</strong>:{' '}
                    {new Date(video.date).toLocaleDateString()}
                  </span>
                  <br />
                  <span>
                    <strong className='font-bold'>By</strong>: {video.author}
                  </span>
                  <p className='my-3 text-md text-gray-700 leading-relaxed'>
                    {video.description}
                  </p>
                  <a
                    href={video.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 font-bold hover:underline hover:text-blue-400 flex justify-center text-xl'
                  >
                    Watch on YouTube{' '}
                    <span role='img' aria-label='right pointer'>
                      👈
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
