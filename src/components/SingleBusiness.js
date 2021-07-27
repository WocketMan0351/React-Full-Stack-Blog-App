import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
import { VscCheck } from 'react-icons/vsc';
import { VscClose } from 'react-icons/vsc';

export default function SingleBusiness() {
  const [singleBusiness, setSingleBusiness] = useState(null);
  const { slug } = useParams();
  let onChain;
  let lightning;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
          name,
          slug,
          'businessImage': image.asset->url,
          location,
          link,
          acceptsOnChain,
          acceptsLightning,
          body,
        }`
      )
      .then((data) => setSingleBusiness(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleBusiness) {
    return <div className='flex justify-center text-3xl'>Loading...</div>;
  }

  if (singleBusiness.acceptsOnChain) {
    onChain = true;
  }

  if (singleBusiness.acceptsLightning) {
    lightning = true;
  }

  const onChainIsTrue = (onChain) => {
    if (onChain) {
      return (
        <VscCheck
          color='green'
          size={24}
          className='flex justify-center ml-3'
        />
      );
    } else {
      return (
        <VscClose color='red' size={24} className='flex justify-center ml-3' />
      );
    }
  };

  const lightningIsTrue = (lightning) => {
    if (lightning) {
      return (
        <VscCheck
          color='green'
          size={24}
          className='flex justify-center ml-3'
        />
      );
    } else {
      return (
        <VscClose color='red' size={24} className='flex justify-center ml-3' />
      );
    }
  };

  return (
    <main className='bg-gray-200 min-h-screen p-10'>
      <article className='container shadow-lg mx-auto bg-white rounded-lg '>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div className='bg-blue-100 bg-opacity-80 rounded p-10'>
              <h1 className='lg:text-3xl md: text-2xl flex justify-center'>
                {singleBusiness.name}
              </h1>
            </div>
          </div>
          <img
            // src={singleBusiness.businessImage} // PULLS IMG FROM SANITY
            className='rounded align-middle'
            style={{
              height: '300px',
              width: 'auto',
            }}
          />
        </header>
        <div className='container'>
          <div className='text-blue-500 hover:text-blue-700 flex justify-center mx-16 py-2'>
            <a
              href={singleBusiness.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {singleBusiness.link}
            </a>
          </div>
          <div className='flex justify-center mx-16 py-3'>
            <p className='block'>{singleBusiness.location}</p>
          </div>
          <div className='flex justify-center mx-16 py-3 font-bold'>
            <h2>Accepted Payment Methods: </h2>
          </div>
          <div className='flex justify-evenly mx-20 py-2'>
            <p className='flex inline'>
              Lightning: {lightningIsTrue(lightning)}
            </p>
            <p className='flex inline'>On-Chain: {onChainIsTrue(onChain)} </p>
          </div>
        </div>
        <div className='px-10 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full sm:py-4'>
          <BlockContent
            blocks={singleBusiness.body}
            projectId='f7olvu4h'
            dataset='production'
          />
        </div>
      </article>
    </main>
  );
}
