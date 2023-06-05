import { cookies } from 'next/headers';

export const runtime = 'edge';

/**
 * This function handles a GET request and returns a Response object.
 *
 * @param {Request} request - the request object for the GET request
 * @return {Promise<Response>} a promise that resolves to a Response object
 */
export async function GET(request: Request): Promise<Response> {
	const cookieStore = cookies();
	const token = cookieStore.get('token');

	return new Response('Hello, Next.js!', {
		status: 200,
		headers: { 'Set-Cookie': `token=${token}` },
	});
}