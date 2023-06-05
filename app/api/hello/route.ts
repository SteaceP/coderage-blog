/**
 * A function that handles a GET request and returns a "Hello, Next.js!" response.
 *
 * @param {Request} request - The request object.
 * @return {Promise<Response>} A response object with a "Hello, Next.js!" message.
 */
export async function GET(request: Request): Promise<Response> {
    return new Response('Hello, Next.js!')
  }