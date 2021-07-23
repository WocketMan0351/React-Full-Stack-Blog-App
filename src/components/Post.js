import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

export default function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-blue-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-4xl flex justify-center'>Articles Page</h1>
        <h2 className='text-lg text-gray-600 flex justify-center my-5'>
          Welcome down the rabbit hole!
        </h2>
        <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-3'>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span
                    className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-300'
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 text-red-100 bg-opacity-75 rounded'>
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
