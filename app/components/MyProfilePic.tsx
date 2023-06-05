'use client';

import { CldImage } from 'next-cloudinary';

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <CldImage
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        width={200}
        height={200}
        src='v1685926881/profile-photo-600x600_jiq3ii.jpg'
        sizes='100vw'
        alt='Steace'
        priority={true}
      />
    </section>
  );
}
