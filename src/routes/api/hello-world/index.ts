import type { Page } from '@sveltejs/kit';

export function GET({ params }: Page) {
	const name = params?.name;
	return new Response(String(name));
}
