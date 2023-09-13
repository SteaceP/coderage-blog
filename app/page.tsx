import Head from 'next/head';

import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 pb-4 text-center text-3xl text-slate-600'>
        This Website is a work in progress! Most of the code is already written.
        I just need to port it to this one but I'm lazy.
      </p>
      <Posts />
    </main>
  );
}
