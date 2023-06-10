// since there's no dynamic data here, we can prerender

import type { PageLoad, PageLoadEvent } from './$types';

// it so that it gets served as a static asset in production
// export const prerender = true;
// /** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }: PageLoadEvent) {
	const res = await fetch('/api/random-number');
	const data = await res.json();
	return {
		number: data * 1000000000
	};
}
