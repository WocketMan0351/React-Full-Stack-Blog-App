import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
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
    <main className='bg-blue-100 min-h-screen p-12'>
      <div className='p-4 lg:pt-36 container mx-auto relative'>
        <section className='bg-white bg-opacity-80 rounded-lg shadow-2xl lg:flex p-10'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-20 h-20 lg:w-50 lg:h-50 mr-8'
          />
          <div className='text-md flex flex-col justify-center'>
            <h1 className='text-2xl text blue 300 mb-3'>
              Hey, I'm <span>{author.name}!</span>
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
