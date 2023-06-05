import Link from 'next/link';

import getFormattedDate from '@/lib/formatDate';

type Props = {
  post: BlogPost;
};

/**
 * Renders a single post item as a list item with the post's title, date,
 * and a link to the post's individual page.
 *
 * @param {Props} post - The post object to be rendered.
 * @return {JSX.Element} A React element representing the post item.
 */
export default function ListItem({ post }: Props): JSX.Element {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className='mt-4 text-2xl dark:text-white/90'>
      <Link
        className='underline hover:text-black/70 dark:hover:text-white'
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  );
}
