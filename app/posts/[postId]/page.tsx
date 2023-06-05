import Link from 'next/link';
import { notFound } from 'next/navigation';

import getFormattedDate from '@/lib/formatDate';
import { getSortedPostsData, getPostData } from '@/lib/generatePosts';

/**
 * Generates static parameters based on the sorted posts data.
 *
 * @return {Array} An array of objects with a postId property.
 */
export function generateStaticParams(): Array<any> {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

/**
 * Generates metadata for a given post ID.
 *
 * @param {Object} params - An object containing the post ID.
 * @param {string} params.postId - The ID of the post to generate metadata for.
 * @return {Object} An object containing the title of the post, or 'Post Not Found' if the post is not found.
 */
export function generateMetadata({
  params,
}: {
  params: { postId: string };
}): object {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

/**
 * Renders a blog post given the postId and returns the JSX element.
 *
 * @param {object} params - An object containing postId.
 * @param {string} params.postId - The postId of the post to be rendered.
 * @return {JSX.Element} The JSX element representing the blog post.
 */
export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/'>← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
