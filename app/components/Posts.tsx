import { getSortedPostsData } from '@/lib/generatePosts';
import ListItem from './ListItem';

/**
 * Renders a list of recent posts with their respective title and date
 *
 * @return {JSX.Element} A section element containing a list of recent posts
 */
export default function Posts(): JSX.Element {
  const posts = getSortedPostsData();

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Recent Posts</h2>
      <ul className='w-full'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
