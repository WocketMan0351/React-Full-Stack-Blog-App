import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

export default function Business() {
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'business']{
          name,
          slug,
          'businessImage': image.asset->url,
        }`
      )
      .then((data) => setBusinessData(data))
      .catch(console.error);
  }, []);

  if (!businessData) {
    return <div className='flex justify-center text-3xl'>Loading...</div>;
  }

  return (
    <main className='bg-blue-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-4xl flex justify-center'>
          Sovereign Small Businesses
        </h1>
        <h2 className='text-lg text-gray-600 flex justify-center my-5'>
          Small AZ businesses that want to be paid in BTC!
        </h2>
        <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-3'>
          {businessData &&
            businessData.map((business, index) => (
              <article>
                <Link
                  to={'/business/' + business.slug.current}
                  key={business.slug.current}
                >
                  <span
                    className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-500'
                    key={index}
                  >
                    <img
                      src={business.businessImage}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 text-red-100 bg-opacity-75 rounded'>
                        {business.name}
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
