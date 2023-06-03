import Head from "next/head";

//TODO: Try the auto-generating feature of Next.js for favicon, etc.
//TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon
export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='194x194'
          href='/favicon-194x194.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='apple-mobile-web-app-title' content='Code Rage' />
        <meta name='application-name' content='Code Rage' />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between p-20'>
        <h1 className='text-6xl font-bold'>Hello world!</h1>
      </main>
    </div>
  );
}
