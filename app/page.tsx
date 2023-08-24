import Head from 'next/head';

import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 pb-4 text-center text-4xl'>
        This Website is a work in progress!
      </p>
      <Posts />
    </main>
  );
}
