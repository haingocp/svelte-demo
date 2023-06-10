import { error, type Page, type RequestHandler } from '@sveltejs/kit';

export async function GET({ url }: Page) {
	const min = Number(url.searchParams.get('min') ?? '0');
	const max = Number(url.searchParams.get('max') ?? '1');

	const d = max - min;

	if (isNaN(d) || d < 0) {
		throw error(400, 'min and max must be numbers, and min must be less than max');
	}
	// Delay for 500 milliseconds
	await new Promise((resolve) => setTimeout(resolve, 500));

	const random = min + Math.random() * d;

	return new Response(String(random));
}
